# Generated by Django 4.0.4 on 2022-04-30 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('forum', '0002_alter_post_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='text',
            field=models.TextField(blank=True, default='', max_length=500),
            preserve_default=False,
        ),
    ]
