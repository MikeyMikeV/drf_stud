from rest_framework import serializers
from .models import Film
from drf_extra_fields.fields import Base64ImageField

class FilmSerializer(serializers.HyperlinkedModelSerializer):
    poster = Base64ImageField(required = False)
    class Meta:
        model = Film
        fields = ('url','title','poster','release_date','durations','desc', 'rating', 'studio')