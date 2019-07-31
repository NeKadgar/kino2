from django.contrib import admin
from .models import movie, Top250, BestSerials, Serials, Anime
# Register your models here.
admin.site.register(movie)
admin.site.register(Top250)
admin.site.register(BestSerials)
admin.site.register(Serials)
admin.site.register(Anime)
