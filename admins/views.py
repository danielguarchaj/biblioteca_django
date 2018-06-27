from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse

# Create your views here.
def registro(request):
    return render(request, 'admins/admins_registro.html')

def nuevo_admin(request):
    token = request.GET.get('csrfmiddlewaretoken', None)
    return JsonResponse(token, safe=False)