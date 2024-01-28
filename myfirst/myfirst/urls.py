
from django.contrib import admin
from django.urls import path,include
from .views import FormulaireViewSet
from rest_framework import routers 
router = routers.DefaultRouter()
router.register(r'Formulaire',FormulaireViewSet)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),

]
