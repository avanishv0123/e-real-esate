from django.urls import path
from . import views
from backapp.views import predict_price

urlpatterns = [
    path("", views.home, name="home"),
    path('register', views.register, name='Register'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('Dashboard#dash', views.dash, name='dash'),
    # path('get_username/', views.get_username, name='get_username'),
    path('api/listings/', views.ListingAPIView.as_view(), name='ListingAPIView'),


    path('prediction', views.prediction, name='prediction')






    # path("Agents", views.agent_list, name="agent_list"),
    # path("NewAgents", views.NewAgent, name="NewAgent")

]
