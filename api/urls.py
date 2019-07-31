from . import views
from rest_framework.routers import DefaultRouter
from django.urls import path

router = DefaultRouter()
router.register(r'movies', views.MovieViewSet)
router.register(r'top250', views.Top250ViewSet)
router.register(r'BestSerials', views.BestSerialsViewSet)
router.register(r'anime', views.AnimeViewSet)
router.register(r'serials', views.SerialsViewSet)

urlpatterns = [
    path('film/<int:pk>/', views.movie_detail),
    path('top250/<int:pk>/', views.Top250_detail),
    path('BestSerials/<int:pk>/', views.BestSerials_detail),
    path('serial/<int:pk>/', views.Serials_detail),
    path('anime/<int:pk>/', views.Anime_detail),
]
