# Generated by Django 4.0.4 on 2022-05-01 07:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0002_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comment',
            options={'ordering': ['-date_posted']},
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-date_posted']},
        ),
    ]