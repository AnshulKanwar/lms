from xml.etree.ElementTree import Comment
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Post
from .serializers import PostSerializer


@api_view(['GET'])
def postsList(request):
    posts = Post.objects.all()
    serializer = PostSerializer(
        posts, context={'request': request}, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def postDetail(request, pk):
    post = Post.objects.get(pk=pk)
    postSerializer = PostSerializer(post)
    return Response(postSerializer.data)
