from django.contrib.auth import login, logout, get_user_model
from django.db.models import Q
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_GET
from rest_framework import status, permissions
from rest_framework.authentication import SessionAuthentication
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth.models import User


from .models import Product, Cart, Order
from .serializers import ProductSerializer, UserRegisterSerializer, UserLoginSerializer, OrderSerializer

UserModel = get_user_model()

@require_GET
@ensure_csrf_cookie
def get_csrf_token(request):
    return JsonResponse({'csrfToken': request.META.get('CSRF_COOKIE')})


# Create your views here.

class ProductList(ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        queryset = Product.objects.all()
        category = self.request.query_params.get('category', None)
        if category is not None:
            queryset = queryset.filter(Q(category=category) | Q(subcategory=category))

        return queryset


class UserRegister(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.create(request.data)
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UserLogin(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = [SessionAuthentication, ]

    def post(self, request):
        data = request.data
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid():
            user = serializer.check_user(data)
            login(request, user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(data={"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)


class UserLogout(APIView):
    def post(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class CartView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request):
        username = request.query_params.get('username')
        try:
            if username:
                cart_products = Cart.objects.filter(user__username=username)
                products = [cart_product.product for cart_product in cart_products]
            else:
                products = []

            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        data = request.data

        product_id = data.get('product_id')
        user = UserModel.objects.get(username=data.get('username'))
        user_id = user.id

        if not product_id or not user_id:
            return Response(data={"error": "Product ID and User ID are required"}, status=status.HTTP_400_BAD_REQUEST)

        try:
            cart_order = Cart(product_id=product_id, user_id=user_id)
            cart_order.save()
            return Response(data={"success": "Product saved to cart successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


class OrderView(APIView):
    def get(self, request):
        username = request.query_params.get('username')
        try:
            if username:
                # Filter orders by the user
                orders = Order.objects.filter(user__username=username)
                # Extract the products from the orders
                products = [order.product for order in orders]
            else:
                products = []

            # Serialize the product details
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

    def post(self, request):
        username = request.data.get('username')
        try:
            user = User.objects.get(username=username)
            user_cart_products = Cart.objects.filter(user=user)
            for cart_product in user_cart_products:
                order = Order.objects.create(user=user, product=cart_product.product)
                order.save()
                user_cart_products.delete()
            return Response(data={"success": "Order saved successfully"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response(data={"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
