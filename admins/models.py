from django.db import models

# Create your models here.

class Pais(models.Model):
    nombre = models.CharField(max_length=150)

class Departamento(models.Model):
    nombre = models.CharField(max_length=150)
    pais = models.ForeignKey(Pais, on_delete=models.CASCADE)

class Municipio(models.Model):
    nombre = models.CharField(max_length=150)
    Departamento = models.ForeignKey(Departamento, on_delete=models.CASCADE)

class Administrador(models.Model):
    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)
    telefono = models.CharField(max_length=8)
    correo = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    genero = models.CharField(max_length=100)
    nacimiento = models.DateField()
    cui = models.CharField(max_length=13)
    municipio = models.ForeignKey(Municipio, on_delete=models.CASCADE)
