# Lms
LMS redesigned

# Building

```shell
git clone https://github.com/AnshulKanwar/lms.git
```

## setup backend

```shell
cd backend

# creating python virtual environment (optional, but recommended)
python -m venv venv
source venv/bin/activate  # or whatever the equivalent command is on windows

# install deps
pip install -r requirements.txt

# set a new SECRET_KEY
export SECRET_KEY='python3 -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"'

python3 manage.py createsuperuser

python manage.py migrate

python manage.py runserver
```

- The admin site should be live at http://localhost:8000/admin/
- Log into the admin site with your superuser credentials.
- You need to add students through that site.
- You can also configure courses, timetable, announcements using admin site.

## setup frontend

```shell
cd frontend

npm i

npm run start
```
