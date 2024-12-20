# Generated by Django 5.1.1 on 2024-11-24 04:09

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_pets'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='ScheduledServices',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pet_name', models.CharField(blank=True, max_length=30, null=True)),
                ('service', models.CharField(blank=True, max_length=100, null=True)),
                ('duration', models.IntegerField(blank=True, null=True)),
                ('scheduled_date', models.DateField(blank=True, null=True)),
                ('scheduled_time', models.TimeField(blank=True, default='00:00:00', null=True)),
                ('status', models.BooleanField(default=False)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='scheduled_services', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
