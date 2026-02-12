# 2) შექმენით კლასი Person, რომელსაც ექნება თვისებები name და age. შექმენით მეთოდი introduce(), რომელიც დაბეჭდავს:
#  "Hello, my name is {name} and I am {age} years old"
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        return f'hello, my name is {self.name} and I am {self.age} years old'

person1 = Person("deme", "11")

print(person1.name)
print(person1.age)
print(person1.introduce())

# 3) შექმენით კლასი Rectangle, რომელსაც ექნება თვისებები width და height.  ასევე შექმენით მეთოდები area() და perimeter() რომლებიც გამოითვლის მართკუთხედის პერიმეტრსა და ფართობს.
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return 2 * (self.width + self.height)

    def perimeter(self):
        return self.width * self.height

rectangle = Rectangle(25, 28)

print(rectangle.width)
print(rectangle.height)
print(rectangle.area())
print(rectangle.perimeter())

# 4) შექმენით კლასი Product და დაამატეთ თვისებები price და quantity. დაამატეთ მეთოდი:
# total_value() → price × quantity

# ასევე კლასის გამოყენებით შექმენით პროდუქტების სია და:
# • იპოვეთ ყველაზე ძვირი პროდუქტი
# • იპოვეთ ყველაზე იაფი პროდუქტი

class Product:
    def __init__(self, price, quantity):
        self.price = price
        self.quantity = quantity

    def multyply(self):
        return self.price * self.quantity

product1 = Product(30, 100)
product2 = Product(200, 30)
product3 = Product(1, 12321312312312312312)

filter_product = [product1.price, product2.price, product3.price]

print(min(filter_product))
print(max(filter_product))