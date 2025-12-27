# 2) რა დანიშნულება აქვს finally, else და raise keyword-ებს?
# finally - შეგვიძლია მომხარებელს დავუტოვოთ ბოლო სიტყვა რომც სწორე იყვეს და არასწორეც, raise - ჩვენ თვითონ ვიწვევთ error-ს, else - სხვა შემთხვევაში

# 3) შექმენით ფუნქცია divide(a, b) რომელიც აბრუნებს გაყოფის შედეგს.
# გამოიყენეთ try/except, რომ ZeroDivisionError-მა არ გამოიწვიოს შეცდომა.

# try:
#     a = int(input("enter a number: "))
#     b = int(input("enter a number2: "))
#     a / b
# except ValueError:
#     print("sorry invalid number!")
# except ZeroDivisionError:
#     print("cant / in zero")
# else:
#     print(f'it`s {a / b}')
# finally:
#     print("good luck")

# 4) დაწერეთ კოდი, რომელიც:
# try-ში ბეჭდავს "Trying..."
# except-ში ბეჭდავს "Error encountered"
# finally-ში ბეჭდავს "Code cleanup is done"
try:
    print('Trying...')
except SyntaxError:
    print("Error encountered")
finally:
    print("Code cleanup is done")

# 5) დაწერეთ ფუნქცია check_password, რომელსაც გადაეცემა პარამეტრი pass.
# გამოიყენეთ Exception Handling, რომ გამოიწვიოთ შემდეგი Error-ები:
# თუ პაროლი < 8 სიმბოლოა -> "Password too short"
# თუ შეიცავს space-ს -> "Password cannot contain spaces"
# თუ ყველაფერი სწორია აბრუნებს "Password accepted"
def check_passwork(password):
    try:
        if len(password) < 8:
            raise Exception("Password is to short")
        elif " " in password:
            raise Exception("Password cannot contain spaces")
    except:
        return "Error"
    else:
        return  "Password accepet"

check_passwork('sukhita999554234567689765432456789076546789765')

# 6) განურჩევლად იმისა დაესწარით გაკვეთილს თუ არა - ყველამ თავიდან ბოლომდე უყურეთ ჩანაწერს. შემდეგზე შევამოწმებ თქვენს ცოდნას.
# ვუყურე