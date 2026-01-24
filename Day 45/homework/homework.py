# 2) შექმენით ფუნქცია check_age, რომელიც არგუმენტად მიიღებს მომხმარებლის ასაკს.
# თუ მომხმარებლის ასაკი მეტი ან ტოლი იქნება 18-ზე, ტერმინალში დაიბეჭდოს "Access Granted", წინააღმდეგ შემთხვევაში – "Access Denied".
def check_age(age):
    if age >= 18:
        print("Access Granted")
    else:
        print("Access Denied")

check_age(12)

# 3) შექმენით ფუნქცია print_names, რომელიც მიიღებს სახელების სიას და ტერმინალში თითოეული მათგანს ცალ-ცალკე ხაზზე დაბეჭდავს.
def print_names(list):
    x = []
    for i in list:
        x.append(i)
    return x

print(list(["deme", "tamo", "levani", "lika" "saba"]))


# 4) დაწერეთ ფუნქცია სახელწოდებით odd_or_even. ფუნქციამ უნდა დააბრუნოს Even თუ არგუმენტად გადაცემული რიცხვი ლუწია, ხოლოდ Odd - თუ კენტი.
def odd_or_even(num):
    if num % 2 == 0:
        print("Even")
    else:
        print("odd")
odd_or_even(7)

# 5) შექმენით ფუნქცია student_grade, რომელიც იღებს მოსწავლის ქულას (0-დან 100-მდე) და ტერმინალში დაბეჭდავს შემდეგ ქულებს:

#     • 90-100: - A

#     • 70-89: - B

#     • 50-69: - C

#     • 0-49: - F
def student_grade(num1):
    if 90 <= num1 <= 100:
        print("A")
    elif 70 <= num1 <= 89:
        print("B")
    elif 50 <= num1 <= 69:
        print("C")
    elif 0 <= num1 <= 49:
        print("F")

student_grade(98)