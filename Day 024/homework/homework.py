
original_password = input("შეიყვანეთ პაროლი: ")


while True:
    repeat_password = input("გაიმეორეთ პაროლი: ")
    
    if repeat_password == original_password:
        print("პაროლი დაემთხვა!")
        
    else:
        print("პაროლი არ დაემთხვა, სცადეთ კიდევ ერთხელ.")

number = 7
guess = input("enter number guess:")

if guess == number:
    print("number is guested")

else:
    print("number is not guested try again:")

faworite_pet = ["dog", "hourse", "cat"]
print(faworite_pet[0], faworite_pet[2])

color = ["red", "blue", "orange", "yellow", "black"]
print(color[-3])

name = input("enter your name: ")
name1 = input("enter your name: ")
name2 = input("enter your name:")

list = [name, name1, name2]
print(list)