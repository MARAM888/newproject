from django.shortcuts import render
from rest_framework import viewsets
from .models import Formulaire
from .serializer import FormSerializer
from django.http import HttpResponse

from django import forms
class FormulaireViewSet(viewsets.ModelViewSet):
    queryset = Formulaire.objects.all()
    serializer_class = FormSerializer

"""def nvformul(request):
    test=False
    if request.method == 'POST':
        form = SomeForm(request.POST)
        if form.is_valid():
            form.instance.id = 1
            form.save()
            # Process the form data (customize this part based on your needs)
            print(form.cleaned_data)
            return HttpResponse('successful!')  # Customize the response
    else:
        form = SomeForm()
        if 'test' in request.GET:
            test=True

    return render(request, 'nvformul.html', {'form': form})"""


