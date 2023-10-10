from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from rest_framework import generics
from . models import *
from . serializer import *
from rest_framework.response import Response
from rest_framework import permissions



class ReactView(generics.ListCreateAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer
    permission_classes = [permissions.IsAuthenticated]


class ReactDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = React.objects.all()
    serializer_class = ReactSerializer
    permission_classes = [permissions.IsAuthenticated]
