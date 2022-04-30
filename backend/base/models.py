from django.db import models

class Batch(models.Model):
    batch = models.CharField(
        max_length=4,
        blank=False
    )

    class Meta:
        verbose_name_plural = "batches"

    def __str__(self) -> str:
        return self.batch 

class TimeTable(models.Model):
    course = models.ForeignKey('courses.course', on_delete=models.CASCADE)

    SUNDAY = 'SUN'
    MONDAY = 'MON'
    TUESDAY = 'TUE'
    WEDNESDAY = 'WED'
    THURSDAY = 'THU'
    FRIDAY = 'FRI'
    SATURDAY = 'SAT'

    day_choices = [
        (SUNDAY, 'Sunday'),
        (MONDAY, 'Monday'),
        (TUESDAY, 'Tuesday'),
        (WEDNESDAY, 'Wednesday'),
        (THURSDAY, 'Thursday'),
        (FRIDAY, 'Friday'),
        (SATURDAY, 'Saturday'),
    ]

    day = models.CharField(
        max_length=3,
        choices=day_choices
    )

    start_time = models.TimeField()
    end_time = models.TimeField()

    batch = models.ManyToManyField(Batch)

    LECTURE = 'lecture'
    LAB = 'lab'

    class_type_choices = [
        (LECTURE, 'Lecture'),
        (LAB, 'Lab'),
    ]

    class_type = models.CharField(
        max_length=7,
        choices=class_type_choices,
    )

    class Meta:
        verbose_name_plural = "time table"

    def __str__(self) -> str:
        return f'{self.course} {self.class_type} on {self.day} at {self.start_time}'
