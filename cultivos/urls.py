from django.urls import path, include
from rest_framework import routers
from cultivos import views

# Definir el router
router = routers.DefaultRouter()
router.register(r'cultivos', views.CultivosViewSet)

# URLs de la API
urlpatterns = [
    path('api/data/', include(router.urls)),
]
