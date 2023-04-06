from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("/Agents", views.agent_list, name="agent_list"),

]
