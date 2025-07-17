#  მომხმარებელს შემოატანინეთ მთელი რიცხვი და დაწერეთ პროგრამა, რომელიც ამოწმებს:
# • თუ რიცხვი დადებითია, დაბეჭდოს: "the number is positive"
# • თუ უარყოფითია, დაბეჭდოს: "the number is negative"
# • თუ ნულია, დაბეჭდოს: "the number is zero"
num = int(input("enter a number: "))

if num > 0:
    print("the number is positive")

elif num < 0:
    print("the number is negative")

else: 
    print("the number is zero")

# 2) ცვლადში შეინახეთ პაროლი. შემდეგ მომხმარებელს შემოატანინეთ პაროლი. იქამდე გამოუტანეთ "incorrect password" სანამ მომხმარებელი სწორად არ შემოიტანს პაროლს. სწორად შემოტანის შემთხვევაში გამოიტანეთ "correct password" (გამოიყენეთ while loop)
password = "siuu"

user_password = input("enter a password: ")
while password != user_password:
    print("incorrect password")
    user_password = input("enter a password: ")
print("correct password")