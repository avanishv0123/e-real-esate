from datetime import datetime
# Create your models here.
# from django.contrib.auth.models import AbstractUser
# from django.contrib.auth.models import User
from django.db import models
# from django.conf import settings

# class Agents(models.Model):
#     name = models.CharField(max_length=200)
#     photo = models.ImageField(upload_to='photo/%Y/%m/%d')
#     description = models.TextField(blank=True)
#     phone = models.CharField(max_length=20)
#     email = models.CharField(max_length=50)
#     is_mvp = models.BooleanField(default=datetime.now, blank=True)
#     hire_date = models.DateTimeField(default=datetime.now, blank=True)

#     def __str__(self):
#         return self.name

# from django.contrib.auth.models import AbstractUser


# class user(AbstractUser):
#     photo = models.ImageField(upload_to='photos', null=True, blank=True)

#     # def __str__(self):
#     #     return self.name


class Listing(models.Model):
    OPTIONS = (
        ('1', '1 BHK'),
        ('2', '2 BHK'),
        ('3', '3+ BHK'),
    )
    OPTIONS2 = (
        ('1', 'Flat'),
        ('2', 'Plot'),
        ('3', 'Bungalow'),
    )

    Name = models.CharField(max_length=100)
    Location = models.CharField(max_length=100)
    BHK = models.CharField(max_length=1, choices=OPTIONS)
    PropType = models.CharField(max_length=1, choices=OPTIONS2)
    image = models.ImageField(upload_to='listings/')
    price = models.IntegerField()

    def __str__(self):
        return self.Name
