from django.db import models

class Batch(models.Model):
    name = models.CharField(
        max_length=4,
        blank=False
    )

    class Meta:
        verbose_name_plural = "batches"

    def __str__(self) -> str:
        return self.name 

class TimeTable(models.Model):
    course = models.ForeignKey('courses.course', on_delete=models.CASCADE)

    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6
    SUNDAY = 7

    day_choices = [
        (MONDAY, 'Monday'),
        (TUESDAY, 'Tuesday'),
        (WEDNESDAY, 'Wednesday'),
        (THURSDAY, 'Thursday'),
        (FRIDAY, 'Friday'),
        (SATURDAY, 'Saturday'),
        (SUNDAY, 'Sunday'),
    ]

    day = models.PositiveSmallIntegerField(
        choices=day_choices,
        blank=False
    )

    start_time = models.TimeField()
    end_time = models.TimeField()

    batch = models.ManyToManyField(Batch)

    teacher = models.OneToOneField('users.Teacher', on_delete=models.SET_NULL, null=True)

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
        return f'{self.course} {self.class_type} on {self.day_choices[self.day - 1][1]} at {self.start_time}'
