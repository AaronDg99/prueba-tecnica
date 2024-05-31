from rest_framework import serializers
from .models import Usuario

class UsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Usuario
        fields = ['id', 'email', 'password']

def create(self, validated_data):
    password = validated_data.pop('password', None)
    user = Usuario.objects.create(**validated_data)
    if password:
        user.set_password(password)
        user.save()
    return user


