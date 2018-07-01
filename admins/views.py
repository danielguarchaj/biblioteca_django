from django.shortcuts import render, render_to_response
from django.http import HttpResponse
from django.http import JsonResponse
from admins.models import Departamento
from admins.models import Municipio
from admins.models import Administrador
from django.utils.dateparse import parse_date
import json

# Create your views here.
def registro(request):
    departamentos = Departamento.objects.all()
    return render(request, 'admins/admins_registro.html', {'data': departamentos})

def nuevo_admin(request):
#    token = request.GET.get('csrfmiddlewaretoken', None)
    admin_data = request.POST.get('nuevo_admin', None)
    admin_data = json.loads(admin_data)
    municipio = obtener_municipio(admin_data["municipio"])
    Administrador(
                    nombres=admin_data["nombres"],
                    apellidos=admin_data["apellidos"],
                    direccion=admin_data["direccion"],
                    telefono=admin_data["telefono"],
                    correo=admin_data["correo"],
                    password=admin_data["password"],
                    genero=admin_data["genero"],
                    nacimiento=admin_data["nacimiento"],
                    cui=admin_data["cui"],
                    municipio=municipio
                  ).save()
    return JsonResponse("Administrador agregado!", safe=False)


def obtener_municipio(mun_id):
    municipio = Municipio.objects.filter(id=mun_id)
    return municipio[0]


def cargar_municipios(request):
    departamento_id = request.POST.get('departamento_id', None)
    data = Municipio.objects.filter(id=departamento_id)
    municipios = ''
    for mun in data:
        municipios += '<option value="' + str(mun.id) + '">' + str(mun.nombre) + '</option>'
    print(municipios)
    return JsonResponse(municipios, safe=False)
