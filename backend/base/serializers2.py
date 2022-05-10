# Need another module for serializer to avoid circular imports

from rest_framework.serializers import ModelSerializer

from .models import TimeTable
from users.serializers import TeacherSerializer
from courses.serializers import CourseSerializer


class TimeTableSerializer(ModelSerializer):
    course = CourseSerializer()
    teacher = TeacherSerializer()

    class Meta:
        model = TimeTable
        fields = '__all__'
