# Generated by Django 4.1.3 on 2023-02-24 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('backapp', '0009_delete_listing'),
    ]

    operations = [
        migrations.CreateModel(
            name='Listing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Location', models.CharField(max_length=100)),
                ('BHK', models.CharField(choices=[('1', '1 BHK'), ('2', '2 BHK'), ('3', '3+ BHK')], max_length=1)),
                ('PropType', models.CharField(choices=[('1', 'Flat'), ('2', 'Plot'), ('3', 'Bungalow')], max_length=1)),
                ('image', models.ImageField(upload_to='listings/')),
                ('price', models.DecimalField(decimal_places=2, max_digits=8)),
            ],
        ),
    ]
