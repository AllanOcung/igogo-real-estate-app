from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model

User = get_user_model()

class CustomTokenObtainPairView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)

        # Ensure response contains access and refresh tokens
        if "access" not in response.data or "refresh" not in response.data:
            return Response({"error": "Invalid login credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        try:
            user = User.objects.get(username=request.data["username"])
        except User.DoesNotExist:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)

        return Response(
            {
                "access": response.data["access"],
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "phone": getattr(user, "phone", ""),  # Handle missing phone
                },
            },
            status=status.HTTP_200_OK,
        )
