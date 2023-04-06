# from .models import Agents
import pickle
from .models import Listing
from rest_framework import serializers, generics
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import viewsets
# from .models import Listing
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, logout, login as dj_login
from django.contrib.auth.models import User
from django.contrib import messages
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from joblib import load
# Create your views here.


def home(request):
    return render(request, "index.html")


@csrf_exempt
def login(request):
    try:
        if request.method == 'POST':
            credential = json.loads(request.body)
            username = credential['username']
            password = credential['password']
            user = authenticate(username=username, password=password)
            if user is not None:
                dj_login(request, user)
                request.session['username'] = username
                return JsonResponse({'msg': 'you have logged in successfuly', 'status': 200,
                                     'username': request.user.username})

            else:
                messages.error(request, 'Bad Credintials')
                return JsonResponse({'error': 'something is wrong'})

    except Exception as exp:
        print(exp)
        return JsonResponse({'error': 'something is wrong'})


#########signup##########
@csrf_exempt
# @api_view(['POST'])
def register(request):
    if request.method == 'POST':
        role = json.loads(request.body)
        print("Role is:", role)
        try:
            if role['role'] == "agent":
                firstname = role['first_name']
                lastname = role['last_name']
                email = role['email']
                username = role['username']
                password = role['password']
                password2 = role['password2']
                # photo = role['photo']

                if User.objects.filter(username=username).exists():
                    error = "Username and email id is already existing.!!"
                    return JsonResponse({'error': error})

                if password == password2:
                    emp = User.objects.create(
                        username=username, email=email, password=password)
                    emp.first_name = firstname
                    emp.last_name = lastname
                    emp.is_staff = True
                    emp.save()
                    messages.success(
                        request, "Your Account is created. Please! check your email for confirmation email id.")
                    print("account is created")
                    return JsonResponse({'msg': "Your account has been created!!", 'status': 200})

                else:
                    error = "Your password are not maching..."
                    return JsonResponse({'error': error})

            else:
                firstname = role['first_name']
                lastname = role['last_name']
                email = role['email']
                username = role['username']
                password = role['password']
                password2 = role['password2']
                # photo = role['photo']

                if User.objects.filter(username=username).exists():
                    error = "Username and email id is already existing.!!"
                    return JsonResponse({'error': error})

                if password == password2:
                    emp = User.objects.create_user(
                        username=username, email=email, password=password)
                    emp.first_name = firstname
                    emp.last_name = lastname
                    # emp.is_active = False
                    emp.save()
                    messages.success(
                        request, "Your Account is created. Please! check your email for confirmation email id.")
                    # logging.info("employee account is created")
                    return JsonResponse({'msg': 'your account has been created', 'status': 200})
                else:
                    error = "Your password are not maching..."
                    messages.error(request, error)
                    return JsonResponse({'error': error})

        except Exception as ex:
            messages.error(request, ex)
            error = "Something went wrong!..."
            print('this is', ex)
            return JsonResponse({'error': error})

    return JsonResponse({'error': "can't load the page"})


# def logout(request):
#     logout(request)
#     return redirect('/')


@csrf_exempt
def logout(request):
    logout(request)
    return JsonResponse({'success': True})

# def agent_list(request):
#     agents = Agents.objects.all()
#     agent_list = [
#         {
#             'name': agent.name,
#             'photo': agent.photo,
#             'description': agent.description,
#             'phone': agent.phone,
#             'email': agent.email,
#         }
#         for agent in agents
#     ]
#     print(agent_list)
#     return JsonResponse({'agents': agent_list})


def dash(request):
    return redirect('/NewAgent')


# views.py

# def create_listing(request):
#     if request.method == 'POST':
#         name = request.POST.get('name')
#         location = request.POST.get('location')
#         BHK = request.POST.get('BHK')
#         PropType = request.POST.get('PropType')
#         image = request.FILES.get('image')
#         price = request.POST.get('price')

#         listing = Listing(name=name, location=location, BHk=BHK, PropType=PropType, image=image,
#                           price=price)
#         listing.save()

#     return redirect('/')

@csrf_exempt
def predict_price(request):
    if request.method == 'POST':
        # Get the input data from the request body
        area = float(request.POST.get('area'))
        rooms = int(request.POST.get('rooms'))
        price = float(request.POST.get('price'))
        location = request.POST.get('location')

        # Load the trained machine learning model
        model = load('house_price_prediction_model.joblib')

        # Prepare the input features as a list of lists
        input_features = [[area, rooms, price, location]]

        # Make the prediction
        predicted_price = model.predict(input_features)[0]

        # Return the predicted price in the response
        return JsonResponse({'predicted_price': predicted_price})

    else:
        # Render the HTML form for the user to enter input data
        return redirect('/')


# listing the data from Listing model


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'location', 'BHK', 'PropType',
                  'image', 'price']


class ListingAPIView(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer


@csrf_exempt
def prediction(request):
    content = json.loads(request.body)
    print('Request:', content)
    with open('backapp/encoder.pkl', 'rb') as out:
        encoder = pickle.load(out)
    with open('backapp/model.pkl', 'rb') as out:
        model = pickle.load(out)

    area = content['area']
    rooms = content['rooms']
    location = content['location'].lower()
    e_loc = encoder.transform([location])[0]
    pred_data = [int(area), int(rooms[0]), e_loc]
    print('pred_data', pred_data)
    prediction = model.predict([pred_data])

    print('House Price Prediction: ', prediction)

    return JsonResponse({'Status': 'Done', 'Prediction': round(prediction[0])})
