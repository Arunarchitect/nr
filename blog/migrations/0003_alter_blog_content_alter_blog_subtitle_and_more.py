# Generated by Django 4.2.5 on 2023-10-14 20:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_blog'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='content',
            field=models.TextField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='blog',
            name='subtitle',
            field=models.TextField(max_length=50),
        ),
        migrations.AlterField(
            model_name='blog',
            name='title',
            field=models.TextField(max_length=50),
        ),
    ]
