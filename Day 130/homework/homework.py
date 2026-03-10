# 2) გაიარეთ Data hiding & class and static methods და აიღეთ Python Intermediate სერთიფიკატი
# ვეწევი და რომ დავეწევი აუცილებლად გავივლი

# 3) შექმენით Person კლასი ატრიბუტებით (name, age, id_number).
# name უნდა იყოს public, age უნდა იყოს protected (Level 1) ხოლო id_number private (Level 2).

# შექმენით public მეთოდი რომელიც აბრუნებს ასაკს და ცალკე private მეთოდი რომელიც ამოწმებს არის თუ არა პირი სრულწლოვანი გამოიძახეთ id_number  მეთოდი name mangling-ის საშუალებით.
class Person:
    def __init__(self, name, age, id_number):
        self._name = name
        self._age = age
        self.__id_number = id_number
    def private(self):
        if(self._age >= 18):
            return f"you are {self._age} years old and you are full age"
        else:
            return "you are not full age"

person = Person("deme", 10, 1029)

print(person._name)
print(person._age)
print(person._Person__id_number)
print(person.public())
print(person.private())

print("---------------")

person._age = 19

print(person._age)
print(person.public())
print(person.private())

print("------------------")

person._age = 18

print(person._age)
print(person.public())
print(person.private())

print("---------------")

# 4) შექმენით Phone კლასი ატრიბუტებით (model, battery_health, serial_number) 
# model იყოს  protected (Level 1)
# battery_health იყოს ასევე protected (Level 1)
# ხოლო  serial_number  - private (Level 2)

# შექმენით  charge მეთოდი და private validate_serial_number მეთოდი რომელიც ამოწმებს serial_number კოდის სიგრძეს.  გამოიძახეთ private მეთოდი name mangling-ის გამოყენებით.
class Phone:
    def __init__(self, model, battery_health, serial_number):
        self._model = model
        self._battery_health = battery_health
        self.__serial_number = serial_number
    def charge(self):
        return self._battery_health
    def validate_serial_number(self):
        return self.__serial_number

phone = Phone("android", "56%", "121-31-32-43")

print(phone._model)
print(phone._battery_health)
print(phone._Phone__serial_number)
print(phone.charge())
print(phone.validate_serial_number())

print("-------------------")

# 5) შექმენით OnlineCourse კლასი ატრიბუტებით (course_name, students_enrolled, max_students) 

# course_name იყოს protected (Level 1) 
# students_enrolled იყოს private (Level 2) 
# max_students კი იყოს private ატრიბუტი (Level 2) 
# შექმენით  enroll მეთოდი და private check_availability მეთოდი რომელიც ამოწმებს თავისუფალ ადგილებს გამოიძახეთ private მეთოდი name mangling-ის საშუალებით.

# ასევე გამოიძახეთ course_name, students_enrolled და max_students  ატრიბუტები სფეციალური ხერხის გამოყენებით.
class OnlineCorse:
    def __init__(self, course_name, students_enrolled, max_students):
        self._course_name = course_name
        self.__students_enrolled = students_enrolled
        self.__max_students = max_students
    def enroll(self):
        return self.__students_enrolled 
    def check_availability(self):
        return self.__max_students.split(" ")

register = OnlineCorse("GOA", "group 71", "c h a d")

print(register._course_name)
print(register._OnlineCorse__students_enrolled)
print(register._OnlineCorse__max_students)
print(register.enroll())
print(register.check_availability())
