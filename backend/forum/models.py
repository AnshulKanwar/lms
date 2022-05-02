from django.db import models
from users.models import User


class Post(models.Model):
    title = models.CharField(max_length=200, blank=False)
    text = models.TextField(max_length=500, blank=True)
    likes = models.PositiveIntegerField(default=0)
    date_posted = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="user")

    class Meta:
        ordering = ['-date_posted']

    def __str__(self) -> str:
        return f'{self.title[:40]}{"..." if (len(self.title) > 40) else ""}'

class Comment(models.Model):
    text = models.TextField(max_length=500, blank=False)
    date_posted = models.DateTimeField(auto_now_add=True)

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)

    class Meta:
        ordering = ['-date_posted']

    def __str__(self) -> str:
        return f'{self.text[:40]}{"..." if (len(self.text) > 40) else ""} by {self.user.first_name}'