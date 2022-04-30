from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Post
from .serializers import PostSerializer


@api_view(['GET', 'POST'])
def postsList(request):
    if (request.method == 'GET'):
        posts = Post.objects.all()
        serializer = PostSerializer(
            posts, context={'request': request}, many=True)
        return Response(serializer.data)

    elif (request.method == 'POST'):
        serializer = PostSerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
