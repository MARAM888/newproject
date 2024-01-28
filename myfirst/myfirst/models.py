from django.db import models

class Formulaire(models.Model):
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=50, null=False, blank=False)
    prenom = models.CharField(max_length=50, null=False, blank=False)
    mail = models.EmailField(max_length=50, null=False, blank=False)
    class Meta:
        db_table = 'myfirst'
    def _str_(self):
        return self.nom or ''