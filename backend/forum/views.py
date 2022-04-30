from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Post, Comment
from .serializers import PostSerializer, CommentSerializer


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

@api_view(['POST'])
def addComment(request, post_id):
    data = request.data
    print(data)
    comment = Comment.objects.create(
        text=data['text'],
        user_id=data['user'],
        post_id=post_id,
    )
    serializer = CommentSerializer(comment)

    return Response(serializer.data)