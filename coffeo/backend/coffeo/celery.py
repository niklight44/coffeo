import os
from celery import Celery

# Django-settings для воркера
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "coffeo.settings")

app = Celery("coffeo")

# Берём настройки CELERY_ из Django settings
app.config_from_object("django.conf:settings", namespace="CELERY")

# Авто-поиск tasks.py во всех установленных Django-приложениях
app.autodiscover_tasks()