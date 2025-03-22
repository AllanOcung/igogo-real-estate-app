from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
     phone = models.CharField(max_length=15, blank=True, null=True)
     profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
     
     def __str__(self):
          return self.username # Return username as string representation
