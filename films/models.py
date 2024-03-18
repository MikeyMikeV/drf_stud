from django.db import models

class Film(models.Model):
    title = models.CharField(max_length = 100)
    poster = models.ImageField(upload_to='posters/',null=True)
    release_date =models.DateField()
    durations =models.DurationField()
    desc = models.TextField(max_length = 300)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    studio = models.CharField(max_length = 50)
