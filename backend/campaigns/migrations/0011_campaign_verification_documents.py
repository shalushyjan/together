# Generated by Django 3.2.8 on 2022-06-06 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0010_alter_campaign_end_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='campaign',
            name='verification_documents',
            field=models.CharField(default='', max_length=200),
        ),
    ]
