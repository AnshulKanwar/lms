from django.contrib import admin

from .models import Batch, Notification, TimeTable, Announcement


class CustomTimeTableAdmin(admin.ModelAdmin):
    list_display = ('course', 'class_type', 'day')
    list_filter = ('course', 'day', 'teacher')
    fieldsets = (
        (None, {'fields': ('course', 'class_type', 'batch', 'teacher')}),
        ('Timings', {'fields': ('day', ('start_time', 'end_time'))}),
    )
    # add_fieldsets = (
    #     (None, {
    #         'classes': ('wide',),
    #         'fields': ('enrollment_number', 'password1', 'password2', ('first_name', 'last_name'), 'is_staff', 'is_active')}
    #      ),
    # )
    ordering = ('start_time',)


admin.site.register(Batch)
admin.site.register(TimeTable, CustomTimeTableAdmin)
admin.site.register(Announcement)
admin.site.register(Notification)