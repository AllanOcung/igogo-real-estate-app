from rest_framework.routers import DefaultRouter
from listings.api.urls import property_router
from django.urls import path, include

router = DefaultRouter()
# Properties
router.registry.extend(property_router.registry)

urlpatterns = [
    path('', include(router.urls)),
]