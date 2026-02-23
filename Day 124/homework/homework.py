# 2) ახსენით თუ რას ნიშნავს კლასის კონსტრუქტორი. მოიძიეთ ფოტოები რომლებიც ზუსტად აღწერს კონსტრუქტორის მნიშვნელობას/დანიშნულებას.
# მაგალითად გვაქვს self და სელფის მერე დავწეროთ name და ასე შემდეგ

# 3) ახსენით თუ რას ნიშნავს Class Inheritence.
# კლასის კონსტრუკტორი არის იგივე მშობელი ელემენტი რომელიც თანმიდევრობით შეგვიძლია გადავცეთ თვისებები

# 4) შექმენით მშობელი კლასი Employee, რომელსაც მისცემთ თვისებებს name და salary.  ასევე, გაუწერეთ get_salary მეთოდი, რომელიც ბეჭდავს მომუშავის ანაზღაურებას.

#  შექმენით შვილი კლასი Manager, რომელსაც მემკვიდრეობით გადასცემთ Employee-ს თვისებებს.  დამატებით გაუწერეთ bonus_salary მეთოდი, რომელიც salary-ს უმატებს 20%-ს.
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary
    def get_salary(self):
        return f'your salary is {self.salary}'

class bonus_salary(Employee):
    def bonus_salary(self):
        return self.salary + 20

salary = bonus_salary("azearvar", 20)

print(salary.get_salary())
print(salary.bonus_salary())

# 5) შექმენით მშობელი კლასი Vehicle. მიეცით მას თვისებები: brand, year, color, horsePower. მშობელ კლასში დაამატეთ drive() მეთოდი, რომელიც დაბეჭდავს '{color} {brand} is going'. ასევე შექმენით stop() მეთოდი, რომელიც დაბეჭდავს '{color} {brand} is stopping'. 
class Vehicle:
    def __init__(self, brand, year, color, horsepower):
        self.brand = brand
        self.year = year
        self.color = color
        self.horsepower = horsepower
    def drive(self):
        return f'{self.color} {self.brand} is going.'
    def stop(self):
        return f'{self.color} {self.brand} is stoping.'

# შექმენით child კლასები: Car, Motorcycle, Bike. გადაეცით შვილ კლასებს მშობლის თვისებები და მეთოდები. ამასთანავე თქვენი ფანტაზიით მოიფიქრეთ და დაამატეთ სხვადასხვა მეთოდები შვილ კლასებში.
class Car(Vehicle):
    def car(self):
        return f'{self}'

# 6) მოიძიეთ თუ რას ნიშნავს Multiple Level Inheritence და Multi Level Inheritance.