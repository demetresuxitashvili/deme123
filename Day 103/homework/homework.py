# 2) დაწერეთ პროგრამირებაში დაშვებული შეცდომების ორი კატეგორია. კომენტარის სახით ჩამოწერეთ Error-ების ტიპები, რომლებიც განვიხილეთ.
# error-ის ტიპებია bug, exepton, syntax error,  num error,  index error, indetacion error, value error

# 3) მოიძიეთ ინფორმაცია ZeroDivisionError-ის შესახებ. რა შემთხვევაში ვაწყდებით მას პროგრამის გაშვების დროს?


# 4) მომხმარებელს შემოატანინეთ ორი რიცხვი და სცადეთ მათი გაყოფა.
# თუ მეორე რიცხვი არის 0, დაიჭირეთ შეცდომა და დაბეჭდეთ:
# “Can’t divide a number by 0.”
sia1 = input('enter a number1: ')
sia2 = input('enter a number2: ')
try:
    print(sia1, sia2)
except ZeroDivisionError:
    print('Can’t divide a number by 0.')

# 5) მომხმარებელს შეაყვანინეთ ორი რიცხვი
# • და სცადეთ მათი გაყოფა
# • დაიჭირეთ:
# • ValueError
# • ZeroDivisionError
# თითოეული Exception-ის შემთხვევაში განსხვავებული შეტყობინება დაბეჭდეთ.
ricxvi1 = input('enter a number pls 1: ')
ricxvi2 = input("enter a number pls 2: ")
try:
    print(ricxvi1, ricxvi2)
except ValueError:
    print('Can’t divide a number by 0.')
except ZeroDivisionError:
    print('Can’t divide a number by 0.')

# 6) შექმენით Dictionary მომხმარებლის მონაცემებით.
# სცადეთ ისეთი key-ის მნიშვნელობის გამოტანა, რომელიც არ არსებობს. გამოიყენეთ Try/Except ბლოკი იმისთვის, რომ დაიჭიროთ KeyError.
car = {
    'car1': 'bmw',
    'car2': 'supra',
    'car3': 'mercedes',
    'car4': 'GTR',
    'car5': 'ferrary',
}

try:
    print(car)
except KeyError:
    print('not a key')

# 7) მომხმარებელს შემოატანინეთ რიცხვი
# თუ ის ტექსტს შეიყვანს, დაბეჭდეთ:
# "Please Enter numbers only."
num1 = input("enter a number: ")
try:
    print(int(num1))
except ValueError:
    print("Please Enter numbers only.")

# 8) დაასრულეთ საკლასო დავალება.
# დავასრულე

# 9) თავიდან უყურეთ Level 102 და 104-ის ჩანაწერებს.
# ვუყურე