from rest_framework.serializers import ModelSerializer

from .models import Post, Comment

from users.serializers import UserSerializer


class CommentSerializer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Comment
        fields = '__all__'


class PostSerializer(ModelSerializer):

    user = UserSerializer()
    comment_set = CommentSerializer(many=True)

    class Meta:
        model = Post
        fields = ['id', 'user', 'title', 'text', 'likes', 'date_posted', 'comment_set']
