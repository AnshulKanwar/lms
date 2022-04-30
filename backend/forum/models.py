from django.db import models
from users.models import User


class Post(models.Model):
    title = models.CharField(max_length=200, blank=False)
    text = models.TextField(max_length=500, blank=True)
    date_posted = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")

    def __str__(self) -> str:
        return f'{self.title[:40]}{"..." if (len(self.title) > 40) else ""}'
