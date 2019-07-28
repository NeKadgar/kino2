from django.db import models

# Create your models here.

COUNTRY_CHOICES = (
        ("Канада", "Канада"),
        ("Россия", "Россия"),
        ("Великобритания", "Великобритания"),
        ("США", "США"),
        ("Австралия", "Австралия"),
        ("Бельгия", "Бельгия"),
        ("Бразилия", "Бразилия"),
        ("Германия", "Германия"),
        ("Ирландия", "Ирландия"),
        ("Испания", "Испания"),
        ("Италия", "Италия"),
        ("Мексика", "Мексика"),
        ("Франция", "Франция"),
        ("Япония", "Япония"),
        ("Другая", "Другая"),
    )
GENRE_CHOICES = (
        ("Аниме", "Аниме"),
        ("Анимация", "Анимация"),
        ("Биография", "Биография"),
        ("Боевик", "Боевик"),
        ("Вестерн", "Вестерн"),
        ("Военный", "Военный"),
        ("Детектив", "Детектив"),
        ("Документальный", "Документальный"),
        ("Драма", "Драма"),
        ("Исторический", "Исторический"),
        ("Криминальный", "Криминальный"),
        ("Комедия", "Комедия"),
        ("Музыкальный", "Музыкальный"),
        ("Приключения", "Приключения"),
        ("Роман", "Роман"),
        ("Семейный", "Семейный"),
        ("Спорт", "Спорт"),
        ("Триллер", "Триллер"),
        ("Фантастика", "Фантастика"),
        ("Фэнтези", "Фэнтези"),
        ("Другой", "Другой"),
    )
class movie(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.TextField(default='')
    video = models.TextField(default='')
    rank = models.DecimalField(max_digits=10, decimal_places=2)
    year = models.CharField(max_length=4)
    country = models.CharField(max_length=30, choices=COUNTRY_CHOICES, default="(-_-)")
    time = models.DateField(auto_now_add=True)
    long = models.CharField(max_length=4, default='')
    genre1 = models.CharField(max_length=30, choices=GENRE_CHOICES)
    genre2 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    genre3 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    serial = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Top250(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.TextField(default='')
    video = models.TextField(default='')
    rank = models.DecimalField(max_digits=10, decimal_places=2)
    year = models.CharField(max_length=4)
    country = models.CharField(max_length=30, choices=COUNTRY_CHOICES, default="(-_-)")
    time = models.DateField(auto_now_add=True)
    long = models.CharField(max_length=4, default='')
    genre1 = models.CharField(max_length=30, choices=GENRE_CHOICES)
    genre2 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    genre3 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    serial = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class BestSerials(models.Model):

    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.TextField(default='')
    video = models.TextField(default='')
    rank = models.DecimalField(max_digits=10, decimal_places=2)
    year = models.CharField(max_length=4)
    country = models.CharField(max_length=30, choices=COUNTRY_CHOICES, default="(-_-)")
    time = models.DateField(auto_now_add=True)
    long = models.CharField(max_length=4, default='')
    genre1 = models.CharField(max_length=30, choices=GENRE_CHOICES)
    genre2 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    genre3 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    serial = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class TopOfTheYear(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.TextField(default='')
    video = models.TextField(default='')
    rank = models.DecimalField(max_digits=10, decimal_places=2)
    year = models.CharField(max_length=4)
    country = models.CharField(max_length=30, choices=COUNTRY_CHOICES, default="(-_-)")
    time = models.DateField(auto_now_add=True)
    long = models.CharField(max_length=4, default='')
    genre1 = models.CharField(max_length=30, choices=GENRE_CHOICES)
    genre2 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    genre3 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    serial = models.BooleanField(default=False)

    def __str__(self):
        return self.title

class TopComedy(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    image = models.TextField(default='')
    video = models.TextField(default='')
    rank = models.DecimalField(max_digits=10, decimal_places=2)
    year = models.CharField(max_length=4)
    country = models.CharField(max_length=30, choices=COUNTRY_CHOICES, default="(-_-)")
    time = models.DateField(auto_now_add=True)
    long = models.CharField(max_length=4, default='')
    genre1 = models.CharField(max_length=30, choices=GENRE_CHOICES)
    genre2 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    genre3 = models.CharField(max_length=30, choices=GENRE_CHOICES, blank=True)
    serial = models.BooleanField(default=False)

    def __str__(self):
        return self.title