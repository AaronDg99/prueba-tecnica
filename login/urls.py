from django.urls import path
from .views import CustomAuthToken

urlpatterns = [
    path('api/login/', CustomAuthToken.as_view()),

]
