from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import User, Student
from .serializers import UserSerializer, StudentSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['enrollment_number'] = user.enrollment_number
        token['first_name'] = user.first_name
        token['batch'] = user.student.batch.name

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def userDetail(request, enrollment_number):
    user = User.objects.filter(enrollment_number=enrollment_number).first()
    if (user.user_type == 'S'):
        student = Student.objects.get(user=user)
        serializer = StudentSerializer(student)
        return Response(serializer.data)
    else:
        Response('bye')

# @api_view(['GET'])
# @permission_classes([IsAuthenticated])
# def userDetail(request):
#     user = request.user
#     if (user.user_type == 'S'):
#         student = Student.objects.get(user=user)
#         serializer = StudentSerializer(student)
#         return Response(serializer.data)
#     else:
#         Response('bye')