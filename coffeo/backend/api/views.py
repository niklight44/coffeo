from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from models import Product
from serializers import ProductSerializer

# Create your views here.
class ProductList(APIView):
    def get(self, request, format=None):
        products = Product.objects.all()

        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)