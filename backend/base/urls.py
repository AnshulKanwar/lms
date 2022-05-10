from django.urls import path

from . import views

urlpatterns = [
    path('time-table/<batch>', views.timeTableList),
    path('announcements/', views.announcementsList),
    path('notifications/', views.notificationsList),
]