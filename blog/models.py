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
    title = models.TextField(max_length=50)
    subtitle = models.TextField(max_length=50)
    content = models.TextField(max_length=1000)

    class Meta:
        verbose_name_plural = "Blog"

    def __str__(self):
        return self.title


from django.core.validators import MinValueValidator, MaxValueValidator

class CostEstimation(models.Model):
    designing = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        blank=True,
        null=True
    )
    structure = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        blank=True,
        null=True
    )

    mechanical = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        blank=True,
        null=True
    )
    electrical = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        blank=True,
        null=True
    )
    plumbing = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        blank=True,
        null=True
    )
    painting = models.FloatField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
        blank=True,
        null=True
    )
    interior = models.FloatField(
    validators=[MinValueValidator(0), MaxValueValidator(100)],
    blank=True,
    null=True
    )
    # Add other fields for the remaining cost factors with similar validators

    class Meta:
        verbose_name_plural = "Cost Estimations"

    def save(self, *args, **kwargs):
        entered_fields = [field for field in self._meta.fields if getattr(self, field.name) is not None]
        num_entered_fields = len(entered_fields)
        total_entered_value = sum(getattr(self, field.name) for field in entered_fields)
        
        if num_entered_fields < len(self._meta.fields) - 1:
            # Calculate the value to distribute among unentered fields
            remaining_value = 100 - total_entered_value
            num_unentered_fields = len(self._meta.fields) - 1 - num_entered_fields
            value_per_unentered_field = remaining_value / num_unentered_fields

            # Set the values for unentered fields
            for field in self._meta.fields:
                if field != self._meta.fields[0]:  # Skip the first field (usually the ID field)
                    if not getattr(self, field.name):
                        setattr(self, field.name, value_per_unentered_field)

        super(CostEstimation, self).save(*args, **kwargs)
