from django.conf import settings
from django.db import models


class TimeStampedModel(models.Model):
    """Базовая абстрактная модель с created/updated."""
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


# =========================
# Каталог
# =========================

class Category(TimeStampedModel):
    """Категории каталога: Accessories, Coffee beans, Apparel и т.п."""
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True)
    parent = models.ForeignKey(
        "self",
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        related_name="children",
    )
    position = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["position", "name"]

    def __str__(self):
        return self.name


class ProductBadge(TimeStampedModel):
    """Бейджи вида NEW, -20% и т.п."""
    code = models.CharField(max_length=50, unique=True)
    label = models.CharField(max_length=50)
    # Можно использовать в шаблоне для цвета/класса
    css_class = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.label


class Product(TimeStampedModel):
    """Основная модель товара (кофе, аксессуары, apparel, bundle)."""

    class ProductType(models.TextChoices):
        COFFEE_BEANS = "coffee_beans", "Coffee beans"
        INSTANT_COFFEE = "instant_coffee", "Instant coffee"
        ACCESSORY = "accessory", "Accessory"
        APPAREL = "apparel", "Apparel"
        BUNDLE = "bundle", "Bundle"

    class RoastLevel(models.TextChoices):
        LIGHT = "light", "Light"
        MEDIUM = "medium", "Medium"
        DARK = "dark", "Dark"

    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name="products",
    )
    product_type = models.CharField(
        max_length=32,
        choices=ProductType.choices,
        default=ProductType.COFFEE_BEANS,
    )

    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)

    short_description = models.CharField(
        max_length=255,
        blank=True,
        help_text="Краткий текст для карточки",
    )
    description = models.TextField(blank=True)

    price = models.DecimalField(max_digits=10, decimal_places=2)
    old_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True,
        blank=True,
        help_text="Старая цена для отображения скидки",
    )

    badge = models.ForeignKey(
        ProductBadge,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="products",
    )

    stock = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    # Для подсветки на главной
    is_featured = models.BooleanField(
        default=False,
        help_text="Показывать в блоке Explore the recent products",
    )
    is_weekend_special = models.BooleanField(
        default=False,
        help_text="Показывать в блоке Weekend special products",
    )

    # Кофейные параметры (опционально для других типов)
    is_blend = models.BooleanField(
        default=False,
        help_text="Blend / Single origin",
    )
    origin = models.CharField(
        max_length=255,
        blank=True,
        help_text="Страна/регион происхождения",
    )
    roast_level = models.CharField(
        max_length=16,
        choices=RoastLevel.choices,
        blank=True,
    )
    weight_grams = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Вес упаковки в граммах",
    )

    def __str__(self):
        return self.name


class ProductImage(TimeStampedModel):
    """Дополнительные изображения товара."""
    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name="images",
    )
    image = models.ImageField(upload_to="product_images/")
    alt_text = models.CharField(max_length=255, blank=True)
    is_main = models.BooleanField(default=False)
    position = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["position"]

    def __str__(self):
        return f"Image for {self.product.name}"


# =========================
# Маркетинговые блоки
# =========================

class PromoBanner(TimeStampedModel):
    """
    Баннеры типа:
    - 'Check out our best coffee beans'
    - 'Join in and get 25% OFF!'
    """
    class Placement(models.TextChoices):
        HERO = "hero", "Hero section"
        MIDDLE = "middle", "Middle section"
        FOOTER = "footer", "Footer section"

    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255, blank=True)
    placement = models.CharField(
        max_length=32,
        choices=Placement.choices,
        default=Placement.MIDDLE,
    )
    cta_text = models.CharField(max_length=100, blank=True)
    cta_link = models.CharField(max_length=255, blank=True)
    image = models.ImageField(
        upload_to="promo_banners/",
        null=True,
        blank=True,
    )
    position = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["placement", "position"]

    def __str__(self):
        return self.title


class SiteStat(TimeStampedModel):
    """
    Цифры сверху:
    +1000 products, +340k sales и т.п.
    """
    label = models.CharField(max_length=100)
    value = models.BigIntegerField()
    prefix = models.CharField(max_length=10, blank=True)  # '+'
    suffix = models.CharField(max_length=10, blank=True)  # 'k'
    position = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["position"]

    def __str__(self):
        return f"{self.label}: {self.value}"


class Feature(TimeStampedModel):
    """
    Кружки 'Active community', 'Premium quality', 'Best material'.
    """
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    icon_name = models.CharField(
        max_length=100,
        blank=True,
        help_text="Имя иконки в фронтенде",
    )
    position = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["position"]

    def __str__(self):
        return self.title


class Testimonial(TimeStampedModel):
    """
    Отзыв внизу слева.
    """
    author_name = models.CharField(max_length=100)
    author_role = models.CharField(max_length=150, blank=True)
    text = models.TextField()
    avatar = models.ImageField(
        upload_to="testimonials/",
        null=True,
        blank=True,
    )
    position = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ["position"]

    def __str__(self):
        return f"{self.author_name}: {self.text[:40]}..."


class NewsletterSubscription(TimeStampedModel):
    """Подписка на рассылку (форма внизу)."""
    email = models.EmailField(unique=True)
    is_confirmed = models.BooleanField(default=False)
    confirmed_at = models.DateTimeField(null=True, blank=True)
    unsubscribe_token = models.CharField(
        max_length=64,
        blank=True,
        help_text="Можно использовать для линка отписки",
    )

    def __str__(self):
        return self.email


# =========================
# Пользователь, корзина, заказы
# =========================

class CustomerProfile(TimeStampedModel):
    """Расширение пользователя."""
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="customer_profile",
    )
    phone = models.CharField(max_length=32, blank=True)

    def __str__(self):
        return self.user.get_username()


class Address(TimeStampedModel):
    """Адрес доставки."""
    customer = models.ForeignKey(
        CustomerProfile,
        on_delete=models.CASCADE,
        related_name="addresses",
    )
    full_name = models.CharField(max_length=255)
    line1 = models.CharField("Address line 1", max_length=255)
    line2 = models.CharField(
        "Address line 2",
        max_length=255,
        blank=True,
    )
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100, default="Netherlands")
    is_default = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.full_name}, {self.city}"


class Cart(TimeStampedModel):
    """Корзина: либо привязана к пользователю, либо к сессии."""
    customer = models.ForeignKey(
        CustomerProfile,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="carts",
    )
    session_key = models.CharField(
        max_length=40,
        blank=True,
        help_text="Для анонимных пользователей",
    )
    is_active = models.BooleanField(default=True)

    def __str__(self):
        owner = self.customer or self.session_key or "anonymous"
        return f"Cart {self.id} ({owner})"


class CartItem(TimeStampedModel):
    cart = models.ForeignKey(
        Cart,
        on_delete=models.CASCADE,
        related_name="items",
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
        related_name="cart_items",
    )
    quantity = models.PositiveIntegerField(default=1)
    price_snapshot = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        help_text="Цена товара в момент добавления",
    )

    class Meta:
        unique_together = ("cart", "product")

    def __str__(self):
        return f"{self.product.name} x{self.quantity}"


class Order(TimeStampedModel):
    """Заказ на основе корзины."""
    class Status(models.TextChoices):
        CREATED = "created", "Created"
        PAID = "paid", "Paid"
        SHIPPED = "shipped", "Shipped"
        CANCELLED = "cancelled", "Cancelled"

    customer = models.ForeignKey(
        CustomerProfile,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="orders",
    )
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.CREATED,
    )
    total_price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        default=0,
    )

    # Денормализованный адрес на момент заказа
    shipping_full_name = models.CharField(max_length=255)
    shipping_address = models.CharField(max_length=500)
    shipping_city = models.CharField(max_length=100)
    shipping_postal_code = models.CharField(max_length=20)
    shipping_country = models.CharField(max_length=100)

    def __str__(self):
        return f"Order {self.id} [{self.status}]"


class OrderItem(TimeStampedModel):
    order = models.ForeignKey(
        Order,
        on_delete=models.CASCADE,
        related_name="items",
    )
    product = models.ForeignKey(
        Product,
        on_delete=models.PROTECT,
        related_name="order_items",
    )
    product_name = models.CharField(
        max_length=255,
        help_text="Название на момент покупки",
    )
    unit_price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.product_name} x{self.quantity}"


class Payment(TimeStampedModel):
    """Оплата заказа (чисто под интеграцию с платёжкой)."""

    class Provider(models.TextChoices):
        STRIPE = "stripe", "Stripe"
        PAYPAL = "paypal", "PayPal"
        SBER = "sber", "Sber"
        TINKOFF = "tinkoff", "Tinkoff"
        TOCHKA = "tochka", "Tochka"
        OTHER = "other", "Other"

    class PaymentStatus(models.TextChoices):
        PENDING = "pending", "Pending"
        SUCCESS = "success", "Success"
        FAILED = "failed", "Failed"

    order = models.OneToOneField(
        Order,
        on_delete=models.CASCADE,
        related_name="payment",
    )
    provider = models.CharField(
        max_length=20,
        choices=Provider.choices,
        default=Provider.STRIPE,
    )
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    currency = models.CharField(max_length=10, default="EUR")
    status = models.CharField(
        max_length=20,
        choices=PaymentStatus.choices,
        default=PaymentStatus.PENDING,
    )
    provider_payment_id = models.CharField(
        max_length=255,
        blank=True,
        help_text="ID платежа в системе провайдера",
    )

    def __str__(self):
        return f"Payment for order {self.order_id} ({self.status})"
