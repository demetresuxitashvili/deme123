# 1) შექმენით Car class, რომელსაც გაუწერთ თვისებებს: name, brand, horsePower, year, color. 
# class-ში ასევე დაამატეთ მეთოდი move(), რომელიც დაბეჭდავს '{car name} is moving' ყოველ გამოძახებაზე.

# დაამატეთ 2 სხვადასხვა მანქანის ცვლადი და გამოიტანეთ თითოეულის თვისება ცალ-ცალკე. ასევე ორივე მანქანაზე გამოიძახეთ move() მეთოდი.

class Car:
    def __init__(self, name, brand, horsePower, year, color):
        self.name = name
        self.brand = brand
        self.horsePower = horsePower
        self.year = year
        self.color = color

    def move(self):
        return f'{self.name} is moving'

car1 = Car("BMW", "m4", "+9999999999999999", 2024, "green")
car2 = Car("mercedes", "cls", "+9999999999999999", 2003, "black")


print(car1.name)
print(car1.brand)
print(car1.horsePower)
print(car1.year)
print(car1.color)

print(car1.move())

print(car2.name)
print(car2.brand)
print(car2.horsePower)
print(car2.year)
print(car2.color)
print(car2.move())