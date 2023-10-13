from django.urls import path, re_path
from . views import front

app_name = "frontend"

urlpatterns = [
    path("", front, name="front"),
    re_path(r'^.*', front, name="front"),
]