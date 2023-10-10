from django.urls import path
from . import views

urlpatterns = [
    path('react/', views.ReactView.as_view()),
    path('react/<int:pk>/', views.ReactDetailView.as_view())
]