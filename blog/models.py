from django.db import models

# Create your models here.
class React(models.Model):
    full_name = models.CharField(max_length=30)
    email = models.EmailField(max_length=200, null=True)
    password = models.CharField(max_length=20, null=True)

    class Meta:
        verbose_name_plural = "React"

    def __str__(self):
        return self.full_name