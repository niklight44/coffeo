# Generated by Django 5.0.6 on 2024-06-25 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Accessories",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=264, unique=True)),
                ("price", models.FloatField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name="Apparel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=264, unique=True)),
                ("price", models.FloatField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name="CoffeeBeans",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=264, unique=True)),
                ("price", models.FloatField(null=True)),
            ],
        ),
    ]