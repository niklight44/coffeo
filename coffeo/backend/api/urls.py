from django.urls import path, include
from . import views


urlpatterns = [
    path('get-csrf-token', views.get_csrf_token, name='get_csrf_token'),
    path("products/", views.ProductList.as_view(), name="product-list"),
    path("cart/", views.CartView.as_view(), name='cart'),
    path("order/", views.OrderView.as_view(), name='order'),
    path("auth/", include("rest_framework.urls")),
    path("login", views.UserLogin.as_view()),
    path("register", views.UserRegister.as_view())
]