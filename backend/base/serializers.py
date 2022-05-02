from rest_framework.serializers import ModelSerializer

from .models import Announcements, Batch

class AnnouncementsSerializer(ModelSerializer):
    class Meta:
        model = Announcements
        fields = '__all__'


class BatchSerialzer(ModelSerializer):
    class Meta:
        model = Batch
        fields = '__all__'

