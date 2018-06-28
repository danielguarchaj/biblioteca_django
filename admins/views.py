from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.http import JsonResponse
from admins.models import Departamento
from admins.models import Municipio
from admins.models import Administrador
import json

# Create your views here.
def registro(request):
    departamentos = Departamento.objects.all()
    return render(request, 'admins/admins_registro.html', {'data': departamentos})

def nuevo_admin(request):
#    token = request.GET.get('csrfmiddlewaretoken', None)
    admin_data = request.POST.get('nombres', None)
    print(admin_data)
    #admin_data = json.loads(admin_data)
    #print(admin_data)
    Administrador(
                    nombres=admin_data
                  ).save()
    return JsonResponse(admin_data, safe=False)

"""
                    nombres = admin_data.nombres,
                    apellidos = admin_data.apellidos,
                    direccion = admin_data.direccion,
                    telefono = admin_data.telefono,
                    correo = admin_data.correo,
                    password = admin_data.password,
                    genero = admin_data.genero,
                    nacimiento = admin_data.nacimiento,
                    cui = admin_data.cui,
                    municipio = admin_data.municipio
                    """

def cargar_municipios(request):
    departamento_id = request.POST.get('departamento_id', None)
    data = Municipio.objects.filter(id=departamento_id)
    municipios = ''
    for mun in data:
        municipios += '<option value="' + str(mun.id) + '">' + str(mun.nombre) + '</option>'
    print(municipios)
    return JsonResponse(municipios, safe=False)
