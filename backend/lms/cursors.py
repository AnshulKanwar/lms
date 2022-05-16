from django.db import connection

def fetch_users():
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM users_user");
        rows = cursor.fetchall()

    return rows

def fetch_user(first_name):
    with connection.cursor() as cursor:
        cursor.execute("SELECT * FROM users_user WHERE first_name = %s", [first_name]);
        row = cursor.fetchone()

    return row