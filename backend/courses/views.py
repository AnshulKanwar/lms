from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
# from rest_framework.permissions import IsAuthenticated

from .serializers import CourseSerializer
from .models import Course

# from users.models import Student


@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def courseList(request):
    user = request.user
    # student = Student.objects.get(user=user)
    # courses = student.course_set.all()
    courses = Course.objects.all()
    serializer = CourseSerializer(courses, many=True)
    return Response(serializer.data)