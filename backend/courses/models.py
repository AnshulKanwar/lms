from django.db import models
from users.models import Student

class Course(models.Model):
    name = models.CharField(max_length=100, blank=False)
    code = models.CharField(max_length=8, blank=False)

    student = models.ManyToManyField(Student)

    def __str__(self) -> str:
        return self.name
