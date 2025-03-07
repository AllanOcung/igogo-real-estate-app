from django.db import models


class Property(models.Model):
     title = models.CharField(max_length=255)
     description = models.TextField()
     price = models.DecimalField(max_digits=12, decimal_places=2)
     location = models.CharField(max_length=255)
     property_type = models.CharField(choices=[('residential', 'Residential'), ('commercial', 'Commercial'), ('land', 'Land')], max_length=20)
     status = models.CharField(choices=[('available', 'Available'), ('sold', 'Sold'), ('pending', 'Pending')], max_length=10)
     image = models.ImageField(upload_to='property_images/', blank=True, null=True)
     date_added = models.DateTimeField(auto_now_add=True)
     
     
     def __str__(self):
          return self.title