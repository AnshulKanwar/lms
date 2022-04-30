from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Batch, TimeTable, Announcements
from .serializers import TimeTableSerializer, AnnouncementsSerializer

@api_view(['GET'])
def timeTableList(request, batch):
    batch = Batch.objects.filter(name=batch.upper()).first()
    day = request.GET.get('day')
    timeTable = TimeTable.objects.filter(batch=batch).filter(day=day)
    serialzer = TimeTableSerializer(timeTable, many=True)
    return Response(serialzer.data)

@api_view(['GET'])
def announcementsList(request):
    announcements = Announcements.objects.all()
    serialzer = AnnouncementsSerializer(announcements, many=True)
    return Response(serialzer.data)