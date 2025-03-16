from rest_framework import serializers
from ..models import Property

class PropertySerializer(serializers.ModelSerializer):
     image_url = serializers.SerializerMethodField()  # Custom field for full image URL

     class Meta:
          model = Property
          fields = ['id', 'title', 'description', 'price', 'location', 'property_type', 'status', 'image_url', 'date_added']

     def get_image_url(self, obj):
          request = self.context.get('request')  # Get request context
          if obj.image:
               return request.build_absolute_uri(obj.image.url)  # Generate full URL
          return None
