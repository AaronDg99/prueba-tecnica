from rest_framework import viewsets
from .models import Cultivos
from .serializers import CultivosSerializer

class CultivosViewSet(viewsets.ModelViewSet):
    queryset = Cultivos.objects.all()
    serializer_class = CultivosSerializer
