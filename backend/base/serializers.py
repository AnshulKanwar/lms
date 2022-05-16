from rest_framework.serializers import ModelSerializer

from .models import Announcement, Batch, Notification
from courses.serializers import CourseSerializer

class AnnouncementSerializer(ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'


class BatchSerialzer(ModelSerializer):
    class Meta:
        model = Batch
        fields = '__all__'


class NotificationSerializer(ModelSerializer):
    course = CourseSerializer()
    class Meta:
        model = Notification
        fields = '__all__'