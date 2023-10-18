from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from rest_framework import generics
from . models import *
from . serializer import *
from rest_framework.response import Response



class ReactView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer


class ReactDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer

class BlogView(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
class BlogDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer


class CostView(generics.ListCreateAPIView):
    queryset = CostEstimation.objects.all()
    serializer_class = CostSerializer
class CostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CostEstimation.objects.all()
    serializer_class = CostSerializer