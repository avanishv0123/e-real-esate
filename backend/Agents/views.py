from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.shortcuts import render
from django.http import JsonResponse
from .models import Agents


def agent_list(request):
    agents = Agents.objects.all()
    agent_list = [
        {
            'name': agent.name,
            'photo': agent.photo,
            'description': agent.description,
            'phone': agent.phone,
            'email': agent.email,
        }
        for agent in agents
    ]
    print(agent_list)
    return JsonResponse({'agents': agent_list})


#     name = models.CharField(max_length=200)
#     photo = models.ImageField(upload_to='photo/%Y/%m/%d')
#     description = models.TextField(blank=True)
#     phone = models.CharField(max_length=20)
#     email = models.CharField(max_length=50)
#     is_mvp = models.BooleanField(default=datetime.now, blank=True)
#     hire_date = models.DateTimeField(default=datetime.now, blank=True)
