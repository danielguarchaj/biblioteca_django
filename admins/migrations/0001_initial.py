# Generated by Django 2.0.5 on 2018-06-27 22:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Administrador',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombres', models.CharField(max_length=100)),
                ('apellidos', models.CharField(max_length=100)),
                ('direccion', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=8)),
                ('correo', models.CharField(max_length=100)),
                ('password', models.CharField(max_length=100)),
                ('genero', models.CharField(max_length=100)),
                ('nacimiento', models.DateField()),
                ('cui', models.CharField(max_length=13)),
            ],
        ),
        migrations.CreateModel(
            name='Departamento',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Municipio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=150)),
                ('Departamento', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admins.Departamento')),
            ],
        ),
        migrations.CreateModel(
            name='Pais',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=150)),
            ],
        ),
        migrations.AddField(
            model_name='departamento',
            name='pais',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admins.Pais'),
        ),
        migrations.AddField(
            model_name='administrador',
            name='municipio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='admins.Municipio'),
        ),
    ]