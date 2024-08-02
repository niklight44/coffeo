from django.db import models


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=264, unique=True)
    image = models.CharField(max_length=500)
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
