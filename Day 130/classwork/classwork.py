# შექმენით Car კლასი ატრიბუტებით (owner_name, plate_number)
# owner name უნდა იყოს protected attribute (Level 1)
# ხოლო plate_number უნდა იყოს private attribute (Level 2)

# ორივე გამოიტანეთ ტერმინალში. (გამოიყენეთ დამალული ატრიბუტის გამოყენების გზა რაც ვისწავლეთ.)

# კლასში დაამატეთ display_owner მეთოდი, რომელიც უნდა იყოს private attribute (Level 2) დაცული. იგი გამოიძახეთ name mangling-ის საშუალებით.

class Car:
    def __init__(self, owner_name, plate_number):
        self._owner_name = owner_name
        self.__plate_number = plate_number

    def display_owner(self):
        return f'the owner name is {self.__owner_name}'

car = Car("deme", "DE-400-ME")

# print(car.owner_name) შეცდომა

print(car._owner_name)

# print(car.plate_number) შეცდომა
# print(car._plate_number) შეცდომა

print(car._Car__plate_number)
print(car.display_owner)