from django.db import models

# Create your models here.
class React(models.Model):

    image = models.ImageField(
        upload_to='uploads/images',
        null=False,
        blank=False,
        default=f'uploads/images/default.png'
    )
    full_name = models.TextField(max_length=30)
    email = models.EmailField(max_length=200, null=True)
    password = models.TextField(max_length=20, null=True)

    class Meta:
        verbose_name_plural = "React"

    def __str__(self):
        return self.full_name

class Blog(models.Model):

    image = models.ImageField(
        upload_to='uploads/images',
        null=False,
        blank=False,
        default=f'uploads/images/default.png'
    )
    title = models.TextField(max_length=30)
    subtitle = models.TextField(max_length=30)
    content = models.TextField(max_length=30)

    class Meta:
        verbose_name_plural = "Blog"

    def __str__(self):
        return self.title
