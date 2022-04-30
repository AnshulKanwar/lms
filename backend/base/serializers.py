from re import A
from rest_framework.serializers import ModelSerializer

from .models import TimeTable, Announcements
from users.serializers import TeacherSerializer
from courses.serializers import CourseSerializer


class TimeTableSerializer(ModelSerializer):
    course = CourseSerializer()
    teacher = TeacherSerializer()

    class Meta:
        model = TimeTable
        fields = '__all__'

class AnnouncementsSerializer(ModelSerializer):
    class Meta:
        model = Announcements
        fields = '__all__'
