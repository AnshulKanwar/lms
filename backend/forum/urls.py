from django.urls import path

from . import views

urlpatterns = [
    path('', views.postsList),
    path('<int:pk>', views.postDetail),
    path('<int:post_id>/comment', views.addComment),
]