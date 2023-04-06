from django.contrib import admin
# from .models import CustomUser

# Register your models here.
# admin.site.register(CustomUser)

from .models import Listing
admin.site.register(Listing)
