from rest_framework import serializers

from .models import Post

from users.serializer import UserSerializer

class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Post
        fields = '__all__'