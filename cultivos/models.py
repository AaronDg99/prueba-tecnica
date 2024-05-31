from django.db import models

class Cultivos(models.Model):
    TROPICAL = 'Tropical'
    DRY = 'Seco'
    MILD = 'Templado'
    CONTINENTAL = 'Continental'
    COOL = 'Fríos'
    ANYONE = 'Cualquiera'

    WEATHER_CHOICES = [
        (TROPICAL, 'Tropical'),
        (DRY, 'Seco'),
        (MILD, 'Templado'),
        (CONTINENTAL, 'Continental'),
        (COOL, 'Fríos'),
        (ANYONE, 'Cualquiera'),
    ]

    BEGINNER = 'Principiante'
    MEDIUM = 'Medio'
    HARD = 'Difícil'

    DIFFICULTY_CHOICES = [
        (BEGINNER, 'Principiante'),
        (MEDIUM, 'Medio'),
        (HARD, 'Difícil'),
    ]

    SPRING = 'Primavera'
    SUMMER = 'Verano'
    AUTUMN = 'Otoño'
    WINTER = 'Invierno'

    SEASON_CHOICES = [
        (SPRING, 'Primavera'),
        (SUMMER, 'Verano'),
        (AUTUMN, 'Otoño'),
        (WINTER, 'Invierno'),
        (ANYONE, 'Cualquiera'),
    ]

    SUN = 'Sol'
    HALF_SHADOW = 'Media sombra'
    SHADOW = 'Sombra'

    ILLUMINATION_CHOICES = [
        (SUN, 'Sol'),
        (HALF_SHADOW, 'Media sombra'),
        (SHADOW, 'Sombra'),
    ]

    VEGETABLES = 'Hortalizas'
    FLOWERS = 'Flores'
    AROMATICS = 'Aromáticas'

    TYPE_CHOICES = [
        (VEGETABLES, 'Hortalizas'),
        (FLOWERS, 'Flores'),
        (AROMATICS, 'Aromáticas'),
    ]

    title = models.CharField(max_length=100)
    description = models.TextField()
    weather = models.CharField(max_length=20, choices=WEATHER_CHOICES, default=ANYONE)
    image = models.ImageField(upload_to='task_images/')
    quantity = models.IntegerField(default=0)
    difficulty = models.CharField(max_length=20, choices=DIFFICULTY_CHOICES, default=BEGINNER)
    season = models.CharField(max_length=20, choices=SEASON_CHOICES, default=ANYONE)
    illumination = models.CharField(max_length=20, choices=ILLUMINATION_CHOICES, default=SUN)
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)

    def __str__(self):
        return self.title
