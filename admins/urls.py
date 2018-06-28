from django.urls import path
from . import views

urlpatterns = [
    path('registro/', views.registro, name='registro'),
    path('registro/nuevo_admin/', views.nuevo_admin, name='nuevo_admin'),
    path('registro/cargar_municipios/', views.cargar_municipios, name='cargar_municipios'),
]