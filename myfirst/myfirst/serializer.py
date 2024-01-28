from rest_framework import serializers
from .models import Formulaire
class FormSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Formulaire
        fields=["id","nom",'prenom','mail']