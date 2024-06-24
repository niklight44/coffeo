from django.db import models

# Create your models here.
class CoffeeBeans(models.Model):
    name = models.CharField(max_length=264, unique=True)
    price = models.FloatField(null=True)

    def __str__(self):
        return self.name


class Accessories(models.Model):
    name = models.CharField(max_length=264, unique=True)
    price = models.FloatField(null=True)

    def __str__(self):
        return self.name


class Apparel(models.Model):
    name = models.CharField(max_length=264, unique=True)
    price = models.FloatField(null=True)

    def __str__(self):
        return self.name


class Apparel(models.Model):
    name = models.CharField(max_length=264, unique=True)
    price = models.FloatField(null=True)


    def __str__(self):
        return self.name