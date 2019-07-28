from rest_framework import serializers
from .models import movie, Top250, BestSerials


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = movie
        fields = ('id', 'title', 'description','image','video', 'rank', 'year','long','country', 'time', 'genre1','genre2', 'genre3','serial')


class Top250Serializer(serializers.ModelSerializer):
    class Meta:
        model = Top250
        fields = ('id', 'title', 'description','image','video', 'rank', 'year','long','country', 'time', 'genre1','genre2', 'genre3','serial')


class BestSerialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = BestSerials
        fields = ('id', 'title', 'description','image','video', 'rank', 'year','long','country', 'time', 'genre1','genre2', 'genre3','serial')
