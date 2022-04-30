from rest_framework import serializers

from .models import Post, Comment

from users.serializers import UserSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Comment
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):

    user = UserSerializer()
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = Post
        fields = ['id', 'user', 'title', 'text', 'date_posted', 'comment_set']
