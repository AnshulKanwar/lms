from django.contrib import admin

from .models import Batch, TimeTable, Announcements

admin.site.register(Batch)
admin.site.register(TimeTable)
admin.site.register(Announcements)
