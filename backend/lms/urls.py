from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/token/', include('users.urls')),
    path('api/courses/', include('courses.urls')),
]
