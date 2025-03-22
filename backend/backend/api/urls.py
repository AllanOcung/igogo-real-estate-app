from rest_framework.routers import DefaultRouter
from listings.api.urls import property_router
from users.urls import CustomTokenObtainPairView, TokenRefreshView
from django.urls import path, include


urlpatterns = [
    path('api/login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
]