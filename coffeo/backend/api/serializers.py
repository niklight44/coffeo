from django.contrib.auth import get_user_model, authenticate
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'image', 'price', 'category', 'subcategory']


class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'product', 'discount', 'end_date']


UserModel = get_user_model()


class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = "__all__"

    def create(self, validated_data):
        user_obj = UserModel.objects.create_user(username=validated_data['username'], email=validated_data['email'], password=validated_data['password'])
        user_obj.username = validated_data['username']
        user_obj.save()

        return user_obj


class UserLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    # email = serializers.EmailField()
    password = serializers.CharField()

    def check_user(self, data):
        user = authenticate(username=data['username'], password=data['password'])
        if not user:
            raise ValidationError('User not Found')
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('username', 'email')