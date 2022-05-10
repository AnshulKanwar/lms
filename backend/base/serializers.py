from rest_framework.serializers import ModelSerializer

from .models import Announcements, Batch, Notifications
from courses.serializers import CourseSerializer

class AnnouncementsSerializer(ModelSerializer):
    class Meta:
        model = Announcements
        fields = '__all__'


class BatchSerialzer(ModelSerializer):
    class Meta:
        model = Batch
        fields = '__all__'


class NotificationsSerializer(ModelSerializer):
    course = CourseSerializer()
    class Meta:
        model = Notifications
        fields = '__all__'