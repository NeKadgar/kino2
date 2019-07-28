# Generated by Django 2.2.3 on 2019-07-27 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20190726_1359'),
    ]

    operations = [
        migrations.CreateModel(
            name='BestSerials',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('image', models.TextField(default='')),
                ('video', models.TextField(default='')),
                ('rank', models.DecimalField(decimal_places=2, max_digits=10)),
                ('year', models.CharField(max_length=4)),
                ('country', models.CharField(choices=[('Канада', 'Канада'), ('Россия', 'Россия'), ('Великобритания', 'Великобритания'), ('США', 'США'), ('Австралия', 'Австралия'), ('Бельгия', 'Бельгия'), ('Бразилия', 'Бразилия'), ('Германия', 'Германия'), ('Ирландия', 'Ирландия'), ('Испания', 'Испания'), ('Италия', 'Италия'), ('Мексика', 'Мексика'), ('Франция', 'Франция'), ('Япония', 'Япония'), ('Другая', 'Другая')], default='(-_-)', max_length=30)),
                ('time', models.DateField(auto_now_add=True)),
                ('long', models.CharField(default='', max_length=4)),
                ('genre1', models.CharField(choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre2', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre3', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('serial', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Top250',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('image', models.TextField(default='')),
                ('video', models.TextField(default='')),
                ('rank', models.DecimalField(decimal_places=2, max_digits=10)),
                ('year', models.CharField(max_length=4)),
                ('country', models.CharField(choices=[('Канада', 'Канада'), ('Россия', 'Россия'), ('Великобритания', 'Великобритания'), ('США', 'США'), ('Австралия', 'Австралия'), ('Бельгия', 'Бельгия'), ('Бразилия', 'Бразилия'), ('Германия', 'Германия'), ('Ирландия', 'Ирландия'), ('Испания', 'Испания'), ('Италия', 'Италия'), ('Мексика', 'Мексика'), ('Франция', 'Франция'), ('Япония', 'Япония'), ('Другая', 'Другая')], default='(-_-)', max_length=30)),
                ('time', models.DateField(auto_now_add=True)),
                ('long', models.CharField(default='', max_length=4)),
                ('genre1', models.CharField(choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre2', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre3', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('serial', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='TopComedy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('image', models.TextField(default='')),
                ('video', models.TextField(default='')),
                ('rank', models.DecimalField(decimal_places=2, max_digits=10)),
                ('year', models.CharField(max_length=4)),
                ('country', models.CharField(choices=[('Канада', 'Канада'), ('Россия', 'Россия'), ('Великобритания', 'Великобритания'), ('США', 'США'), ('Австралия', 'Австралия'), ('Бельгия', 'Бельгия'), ('Бразилия', 'Бразилия'), ('Германия', 'Германия'), ('Ирландия', 'Ирландия'), ('Испания', 'Испания'), ('Италия', 'Италия'), ('Мексика', 'Мексика'), ('Франция', 'Франция'), ('Япония', 'Япония'), ('Другая', 'Другая')], default='(-_-)', max_length=30)),
                ('time', models.DateField(auto_now_add=True)),
                ('long', models.CharField(default='', max_length=4)),
                ('genre1', models.CharField(choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre2', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre3', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('serial', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='TopOfTheYear',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30)),
                ('description', models.TextField()),
                ('image', models.TextField(default='')),
                ('video', models.TextField(default='')),
                ('rank', models.DecimalField(decimal_places=2, max_digits=10)),
                ('year', models.CharField(max_length=4)),
                ('country', models.CharField(choices=[('Канада', 'Канада'), ('Россия', 'Россия'), ('Великобритания', 'Великобритания'), ('США', 'США'), ('Австралия', 'Австралия'), ('Бельгия', 'Бельгия'), ('Бразилия', 'Бразилия'), ('Германия', 'Германия'), ('Ирландия', 'Ирландия'), ('Испания', 'Испания'), ('Италия', 'Италия'), ('Мексика', 'Мексика'), ('Франция', 'Франция'), ('Япония', 'Япония'), ('Другая', 'Другая')], default='(-_-)', max_length=30)),
                ('time', models.DateField(auto_now_add=True)),
                ('long', models.CharField(default='', max_length=4)),
                ('genre1', models.CharField(choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre2', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('genre3', models.CharField(blank=True, choices=[('Аниме', 'Аниме'), ('Анимация', 'Анимация'), ('Биография', 'Биография'), ('Боевик', 'Боевик'), ('Вестерн', 'Вестерн'), ('Военный', 'Военный'), ('Детектив', 'Детектив'), ('Документальный', 'Документальный'), ('Драма', 'Драма'), ('Исторический', 'Исторический'), ('Криминальный', 'Криминальный'), ('Комедия', 'Комедия'), ('Музыкальный', 'Музыкальный'), ('Приключения', 'Приключения'), ('Роман', 'Роман'), ('Семейный', 'Семейный'), ('Спорт', 'Спорт'), ('Триллер', 'Триллер'), ('Фантастика', 'Фантастика'), ('Фэнтези', 'Фэнтези'), ('Другой', 'Другой')], max_length=30)),
                ('serial', models.BooleanField(default=False)),
            ],
        ),
    ]
