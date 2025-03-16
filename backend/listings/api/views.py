from rest_framework.viewsets import ModelViewSet
from ..models import Property
from .serializers import PropertySerializer

class PropertyViewSet(ModelViewSet):
     queryset = Property.objects.all()
     serializer_class = PropertySerializer