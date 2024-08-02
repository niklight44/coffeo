from django.contrib import admin
from .models import Product, Sale

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'category', 'subcategory', 'image')

class SaleAdmin(admin.ModelAdmin):
    list_display = ('product', 'discount', 'end_date')

admin.site.register(Product, ProductAdmin)
admin.site.register(Sale, SaleAdmin)
