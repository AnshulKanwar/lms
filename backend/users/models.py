from django.db import models
from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

from base.models import Batch

class UserManager(BaseUserManager):
    def create_user(self, enrollment_number, first_name, password, **extra_fields):
        if not enrollment_number:
            raise ValueError(_("The Enrollment Number must be set"))
        user = self.model(enrollment_number=enrollment_number, first_name=first_name, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, enrollment_number, first_name, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active', True)

        if extra_fields.get('is_staff') is not True:
            raise ValueError(_('Superuser must have is_staff=True.'))
        if extra_fields.get('is_superuser') is not True:
            raise ValueError(_('Superuser must have is_superuser=True.'))

        return self.create_user(enrollment_number, first_name, password, **extra_fields)


class User(AbstractUser):
    username = None
    enrollment_number = models.CharField(max_length=9, unique=True)

    first_name = models.CharField(max_length=50, blank=False)
    last_name = models.CharField(max_length=50, blank=True)

    STUDENT = 'S'
    TEACHER = 'T'

    USER_TYPE_CHOICES = (
        (STUDENT, 'Student'),
        (TEACHER, 'Teacher'),
    )

    user_type = models.CharField(
        max_length=1,
        choices=USER_TYPE_CHOICES,
        default=STUDENT
    )

    USERNAME_FIELD = 'enrollment_number'
    REQUIRED_FIELDS = ['first_name']

    objects = UserManager()

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    batch = models.ForeignKey(Batch, on_delete=models.SET_NULL, null=True)

    def __str__(self) -> str:
        return f'{self.user.first_name}'

class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)

    def __str__(self) -> str:
        return f'{self.user.first_name}'