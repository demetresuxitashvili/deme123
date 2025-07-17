# შექმენით სია, სადაც მომხმარებელს შემოატანინებთ 5 რიცხვს (დაგჭირდებათ ცალკე ცვლადები). ცვლადებში შეინახეთ ამ სიის რიცხვების ჯამი და სიის  საშუალო არითმეტიკული. ბოლოს f string-ის გამოყენებით გამოიტანეთ მსგავსი წინადადებები:
# The aritchmetic mean of this list is: ...
# The sum of all numbers in this list is: ...
num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
num3 = float(input("Enter the third number: "))
num4 = float(input("Enter the fourth number: "))
num5 = float(input("Enter the fifth number: "))


numbers = [num1, num2, num3, num4, num5]


total = num1 + num2 + num3 + num4 + num5

mean = total / 5

print(f"The arithmetic mean of this list is: {mean}")
print(f"The sum of all numbers in this list is: {total}")

# შექმენით სია, სადაც დაამატებთ მომხმარებლის მიერ შემოტანილ სიტყვებს. გადაუარეთ სიას Forloop-ით და დაბეჭდეთ ტერმინალში.
# ცარიელი სიის შექმნა
words = []


count = int(input("რამდენ სიტყვას შეიტანთ სიაში? "))


for i in range(count):
    word = input(f"შეიყვანეთ სიტყვა #{i+1}: ")
    words.append(word)


print("შეიტანეთ სიტყვები: ")
for word in words:
    print(word)


# გაიხსენეთ გაკვეთილზე ახსნილი ახალი ოპერატორი (%). დაწერეთ პროგრამა, სადაც მომხმარებელმა უნდა შემოიტანოს ინტეჯერი რიცხვი. if-else ების გამოყენებით დაადგინეთ შემოტანილი რიცხვი ლუწი იქნება თუ კენტი. თუ რიცხვი ლუწია დაბეჭდეთ 'The number is even'. ხოლო თუ კენტია დაბეჭდეთ 'The number is odd'.
number = int(input("შეიყვანეთ მთელი რიცხვი: "))


if number % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")

