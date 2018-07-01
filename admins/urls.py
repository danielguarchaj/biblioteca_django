from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login, name='admin_login'),
    path('registro/', views.registro, name='admin_registro'),
    path('registro/nuevo_admin/', views.nuevo_admin, name='nuevo_admin'),
    path('registro/cargar_municipios/', views.cargar_municipios, name='cargar_municipios'),
]