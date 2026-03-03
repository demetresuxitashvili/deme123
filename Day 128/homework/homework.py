# ```py
# 2) შექმენით Person კლასი (name, age).
# შემდეგ შექმენით Student კლასი, რომელიც ამატებს grade-ს და super()-ით ინიციალიზაციას აკეთებს.
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Student(Person):
    def __init__(self, name, age, grade):
        super().__init__(name, age)
        self.grade = grade

person = Student("demetre", 11, "10 qula")

print(person.name)
print(person.age)
print(person.grade)

# 3) შექმენით Employee კლასი (name, salary).
# შემდეგ შექმენით Manager კლასი, რომელიც მშობელ კლასს დაუმატებს department კუთვნილებას და super()-ით იღებს დანარჩენ კუთვნილებებს.
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

class Manager(Employee):
    def __init__(self, name, salary, departament):
        super().__init__(name, salary)
        self.departament = departament

employee = Employee("deme", 50)
manager = Manager("lika", 999999999999, "mentors departament")

print(employee.name)
print(employee.salary)
print("-------------------")
print(manager.name)
print(manager.salary)
print(manager.departament)

# 4) შექმენით Shape კლასი area() მეთოდით რომელიც დააბრუნებს საწყისად 0-ს (return 0).
# შემდეგ შექმენით Rectangle კლასი (width, height), რომელიც super()-ს გამოიყენებს და მოახდენს area() მეთოდის override-ს.
class Shape:
    def area(self):
        return 0 

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        super().area()
        return self.width * self.height

rect1 = Rectangle(20, 12)

print(rect1.area)

# 5) შექმენი User კლასი (username, email).
# შექმენი Admin კლასი, რომელიც ამატებს role-ს და super()-ით იძახებს მშობლის კონსტრუქტორს.
class User:
    def __init__(self, username, email):
        self.username = username
        self.email = email

class Admin(User):
    def __init__(self, username, email, role):
        super().__init__(username, email)
        self.role = role

user = User("deme", "qweqwe@gmail.com")
admin = Admin("deme", "qweqwe@gmail.com", "admin")

print(user.username)
print(user.email)
print(admin.username)
print(admin.email)
print(admin.role)

# 6) შექმენი Book კლასი (title, author).
# შემდეგ EBook კლასი (file_size), რომელიც super()-ით იძახებს მშობლის კონსტრუქტორს და ამატებს ახალ ატრიბუტს.
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

class Ebook(Book):
    def __init__(self, title, author, azrze_ar_var):
        super().__init__(title, author)
        self.azrze_ar_var = azrze_ar_var

book = Ebook("qweqwe", "blabla", "azrze ar var davwero aq amitom sexede terminals")

print(book.title)
print(book.author)
print(book.azrze_ar_var)
# ```