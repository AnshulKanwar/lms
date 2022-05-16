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

    SUNDAY = 0
    MONDAY = 1
    TUESDAY = 2
    WEDNESDAY = 3
    THURSDAY = 4
    FRIDAY = 5
    SATURDAY = 6

    day_choices = [
        (SUNDAY, 'Sunday'),
        (MONDAY, 'Monday'),
        (TUESDAY, 'Tuesday'),
        (WEDNESDAY, 'Wednesday'),
        (THURSDAY, 'Thursday'),
        (FRIDAY, 'Friday'),
        (SATURDAY, 'Saturday'),
    ]

    day = models.PositiveSmallIntegerField(
        choices=day_choices,
        blank=False
    )

    start_time = models.TimeField()
    end_time = models.TimeField()

    batch = models.ManyToManyField(Batch)

    teacher = models.ForeignKey(
        'users.Teacher', on_delete=models.SET_NULL, null=True)

    class Meta:
        verbose_name_plural = "time table"

    def __str__(self) -> str:
        return f'{self.course} {self.class_type} on {self.day_choices[self.day - 1][1]} at {self.start_time}'


class Announcement(models.Model):
    title = models.CharField(max_length=100, blank=False)
    text = models.TextField(max_length=300)
    date_posted = models.DateField(auto_now_add=True)

    def __str__(self) -> str:
        return self.title


class Notification(models.Model):
    title = models.CharField(max_length=100, blank=False)
    text = models.TextField(max_length=1000)
    batch = models.ManyToManyField(Batch)
    course = models.ForeignKey('courses.Course', on_delete=models.CASCADE)
    isSeen = models.BooleanField(default=False)
    date_posted = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date_posted']
        verbose_name_plural = "notifications"

    def __str__(self) -> str:
        return f'{self.title}'