from django.contrib import admin
from django.urls import path, include

admin.site.site_header  =  "LMS Administration"  
admin.site.site_title  =  "LMS Administration"
admin.site.index_title  =  "LMS Administration"

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),
    path('api/courses/', include('courses.urls')),
    path('api/forum/', include('forum.urls')),
    path('api/', include('base.urls')),
]
