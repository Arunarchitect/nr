from rest_framework import serializers
from . models import *

class ReactSerializer(serializers.ModelSerializer):
    class Meta:
        model = React
        fields = ['full_name','email', 'password','id','image']
        
        
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['title','subtitle', 'content','id','image']       
        

class CostSerializer(serializers.ModelSerializer):
    class Meta:
        model = CostEstimation
        fields = ['designing', 'structure', 'mechanical', 'electrical', 'plumbing', 'painting', 'interior']     
    