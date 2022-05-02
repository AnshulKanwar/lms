from rest_framework import serializers

from .models import User, Student, Teacher

from base.serializers import BatchSerialzer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'enrollment_number', 'first_name', 'last_name']

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    batch = BatchSerialzer()
    class Meta:
        model = Student
        fields = '__all__'

class TeacherSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Teacher
        fields = '__all__'