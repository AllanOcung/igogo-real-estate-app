from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import PropertyViewSet

property_router = DefaultRouter()
property_router.register(r'properties', PropertyViewSet)

urlpatterns = [
     path('api/', include(property_router.urls)),
]