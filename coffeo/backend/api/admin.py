from django.contrib import admin
from django.contrib.auth import get_user_model

from .models import (
    Category,
    ProductBadge,
    Product,
    ProductImage,
    PromoBanner,
    SiteStat,
    Feature,
    Testimonial,
    NewsletterSubscription,
    CustomerProfile,
    Address,
    Cart,
    CartItem,
    Order,
    OrderItem,
    Payment,
)

User = get_user_model()


# =========================
# Каталог
# =========================

class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "slug", "parent", "position", "created_at")
    list_filter = ("parent",)
    search_fields = ("name", "slug")
    prepopulated_fields = {"slug": ("name",)}
    ordering = ("position", "name")


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1


class ProductAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "product_type",
        "price",
        "old_price",
        "stock",
        "is_active",
        "is_featured",
        "is_weekend_special",
        "created_at",
    )
    list_filter = (
        "product_type",
        "category",
        "is_active",
        "is_featured",
        "is_weekend_special",
        "roast_level",
        "is_blend",
    )
    search_fields = ("name", "slug", "short_description", "origin")
    prepopulated_fields = {"slug": ("name",)}
    inlines = [ProductImageInline]
    autocomplete_fields = ("category", "badge")
    readonly_fields = ("created_at", "updated_at")


class ProductBadgeAdmin(admin.ModelAdmin):
    list_display = ("label", "code", "css_class", "created_at")
    search_fields = ("label", "code")


# =========================
# Маркетинг и контент
# =========================

class PromoBannerAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "placement",
        "position",
        "is_active",
        "created_at",
    )
    list_filter = ("placement", "is_active")
    search_fields = ("title", "subtitle")
    ordering = ("placement", "position")


class SiteStatAdmin(admin.ModelAdmin):
    list_display = ("label", "value", "prefix", "suffix", "position")
    ordering = ("position",)


class FeatureAdmin(admin.ModelAdmin):
    list_display = ("title", "icon_name", "position", "is_active")
    list_filter = ("is_active",)
    ordering = ("position",)
    search_fields = ("title", "description")


class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("author_name", "author_role", "position", "is_active")
    list_filter = ("is_active",)
    search_fields = ("author_name", "author_role", "text")
    ordering = ("position",)


class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    list_display = ("email", "is_confirmed", "created_at", "confirmed_at")
    list_filter = ("is_confirmed", "created_at")
    search_fields = ("email",)
    readonly_fields = ("created_at", "updated_at", "confirmed_at")


# =========================
# Пользователи и адреса
# =========================

class AddressInline(admin.TabularInline):
    model = Address
    extra = 0


class CustomerProfileAdmin(admin.ModelAdmin):
    list_display = ("user", "phone", "created_at")
    search_fields = ("user__username", "user__email", "phone")
    inlines = [AddressInline]
    autocomplete_fields = ("user",)
    readonly_fields = ("created_at", "updated_at")


class AddressAdmin(admin.ModelAdmin):
    list_display = (
        "full_name",
        "city",
        "country",
        "postal_code",
        "customer",
        "is_default",
    )
    list_filter = ("country", "city", "is_default")
    search_fields = ("full_name", "city", "postal_code", "customer__user__username")


# =========================
# Корзина и заказы
# =========================

class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 0
    autocomplete_fields = ("product",)


class CartAdmin(admin.ModelAdmin):
    list_display = ("id", "customer", "session_key", "is_active", "created_at")
    list_filter = ("is_active", "created_at")
    search_fields = ("session_key", "customer__user__username")
    inlines = [CartItemInline]
    readonly_fields = ("created_at", "updated_at")


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 0
    autocomplete_fields = ("product",)


class OrderAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "customer",
        "status",
        "total_price",
        "created_at",
        "updated_at",
    )
    list_filter = ("status", "created_at")
    search_fields = (
        "id",
        "customer__user__username",
        "shipping_full_name",
        "shipping_city",
    )
    inlines = [OrderItemInline]
    readonly_fields = ("created_at", "updated_at")


class PaymentAdmin(admin.ModelAdmin):
    list_display = (
        "order",
        "provider",
        "amount",
        "currency",
        "status",
        "created_at",
    )
    list_filter = ("provider", "status", "created_at")
    search_fields = ("order__id", "provider_payment_id")
    readonly_fields = ("created_at", "updated_at")


# =========================
# Регистрация в админке
# =========================

admin.site.register(Category, CategoryAdmin)
admin.site.register(ProductBadge, ProductBadgeAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(PromoBanner, PromoBannerAdmin)
admin.site.register(SiteStat, SiteStatAdmin)
admin.site.register(Feature, FeatureAdmin)
admin.site.register(Testimonial, TestimonialAdmin)
admin.site.register(NewsletterSubscription, NewsletterSubscriptionAdmin)
admin.site.register(CustomerProfile, CustomerProfileAdmin)
admin.site.register(Address, AddressAdmin)
admin.site.register(Cart, CartAdmin)
admin.site.register(Order, OrderAdmin)
admin.site.register(Payment, PaymentAdmin)
