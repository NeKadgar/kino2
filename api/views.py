from .models import movie, Top250, BestSerials, Serials, Anime
from .serializers import MovieSerializer, Top250Serializer, BestSerialsSerializer, SerialsSerializer, AnimeSerializer
from rest_framework import authentication, permissions, viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
class DefaultMixin(object):
    filter_backends = (
        DjangoFilterBackend,
        filters.SearchFilter,
        filters.OrderingFilter,
    )

class MovieViewSet(DefaultMixin, viewsets.ModelViewSet):
    queryset = movie.objects.order_by('-id')
    serializer_class = MovieSerializer
    search_fields = ('title', 'year', 'genre1','genre2', 'genre3', 'country' )
    ordering_fields = ('id', 'rank')



class Top250ViewSet(DefaultMixin, viewsets.ReadOnlyModelViewSet):
    queryset = Top250.objects.order_by('id')
    serializer_class = Top250Serializer
    search_fields = ('title', 'year', 'genre1', 'genre2', 'genre3','country' )
    ordering_fields = ('id', 'rank')

class BestSerialsViewSet(DefaultMixin, viewsets.ReadOnlyModelViewSet):
    queryset = BestSerials.objects.order_by('id')
    serializer_class = BestSerialsSerializer
    search_fields = ('title', 'year', 'genre1','genre2', 'genre3', 'country' )
    ordering_fields = ('id', 'rank')

class SerialsViewSet(DefaultMixin, viewsets.ReadOnlyModelViewSet):
    queryset = Serials.objects.order_by('id')
    serializer_class = SerialsSerializer
    search_fields = ('title', 'year', 'genre1','genre2', 'genre3', 'country' )
    ordering_fields = ('id', 'rank')

class AnimeViewSet(DefaultMixin, viewsets.ReadOnlyModelViewSet):
    queryset = Anime.objects.order_by('id')
    serializer_class = AnimeSerializer
    search_fields = ('title', 'year', 'genre1','genre2', 'genre3', 'country' )
    ordering_fields = ('id', 'rank')

@api_view(['GET'])
def Anime_detail(request, pk):
    try:
        snippet = Anime.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AnimeSerializer(snippet)
        return Response(serializer.data)

@api_view(['GET'])
def Serials_detail(request, pk):
    try:
        snippet = Serials.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SerialsSerializer(snippet)
        return Response(serializer.data)

@api_view(['GET'])
def BestSerials_detail(request, pk):
    try:
        snippet = BestSerials.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BestSerialsSerializer(snippet)
        return Response(serializer.data)

@api_view(['GET'])
def Top250_detail(request, pk):
    try:
        snippet = Top250.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = Top250Serializer(snippet)
        return Response(serializer.data)



@api_view(['GET'])
def movie_detail(request, pk):
    try:
        snippet = movie.objects.get(pk=pk)
    except Snippet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MovieSerializer(snippet)
        return Response(serializer.data)
