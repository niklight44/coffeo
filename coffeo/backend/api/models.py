from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=264, unique=True)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    price = models.FloatField(null=True)
    category = models.CharField(max_length=264)
    subcategory = models.CharField(max_length=264)

    def __str__(self):
        return self.name


class Sale(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='sales')
    discount = models.FloatField(null=True)
    end_date = models.DateTimeField()

    def __str__(self):
        return f"{self.product.name} - Sale ends on {self.end_date}"


class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='sales')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
