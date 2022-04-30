from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from .models import Course
from .serializers import CourseSerializer

from users.models import Student


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def courseList(request):
    if (request.method == 'GET'):
        user = request.user
        student = Student.objects.get(user=user)
        courses = student.course_set.all()
        serializer = CourseSerializer(courses, many=True)
        return Response(serializer.data)

    elif (request.method == 'POST'):
        serializer = CourseSerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
