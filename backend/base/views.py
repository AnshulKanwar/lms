from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Batch, Notification, TimeTable, Announcement
from .serializers import AnnouncementSerializer, NotificationSerializer
from .serializers2 import TimeTableSerializer


@api_view(['GET'])
def timeTableList(request, batch):
    batch = Batch.objects.filter(name=batch.upper()).first()
    day = request.GET.get('day')
    timeTable = TimeTable.objects.filter(batch=batch).filter(day=day)
    serialzer = TimeTableSerializer(timeTable, many=True)
    return Response(serialzer.data)


@api_view(['GET'])
def announcementsList(request):
    announcements = Announcement.objects.all()
    serialzer = AnnouncementSerializer(announcements, many=True)
    return Response(serialzer.data)


@api_view(['GET'])
def notificationsList(request):
    notifications = Notification.objects.all()
    serialzer = NotificationSerializer(notifications, many=True)
    return Response(serialzer.data)
