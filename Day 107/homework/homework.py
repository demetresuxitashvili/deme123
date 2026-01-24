    # 2) def hello(name):
    #     return f'Hello, {name}'

    # def goodbye(name):
    #     return f'Goodbye, {name}'

    # def process_user(name):
    #     return goodbye(name)

    # print(hello('Deme))
    # print(process_user('Deme'))

# --------------------------
# process user-ს გადაეცით func პარამეტრი. გატესტეთ ორივე შემთხვევა: არგუმენტად მას ჯერ hello, შემდეგ კი goodbye. დააკვირდით Output-ს.


# 3) ჩამოწერეთ რამდენი ტიპის ფუქნცია არსებობს პითონში?
# თითოეულს მიუწერეთ მოკლე დახასიათება.
# არსებობს 3 ფუნქცია pure function - აქვს იგივე input და არ იცვლება რასაც გამოატანინებ ანუ გავლენას არ ახდენს, impure function - აბრუნებს განსხვავებულ პასუხს ყოველ ჯერზე რამდენჯერაც გავუშვებთ, hight-order function - იყებს ფუნქცისს არგუმენტის სახელს

# 4) შექმენით სამივე ფუნქციის ორ-ორი მაგალითი.
# pure function ↓
def haha(argumenti):
    return argumenti

print(haha('blabla'))

# impure function ↓
fotballers = ['ronadlo', 'messi', 'neymar', 'lukaku', 'kavartshelia', 'yamal', 'mbappe']

def remover(lst):
    lst.pop()
    return lst

print(remover(fotballers))
print(remover(fotballers))
print(remover(fotballers))
print(remover(fotballers))
print(remover(fotballers))
print(remover(fotballers))
print(remover(fotballers))

# hight-order function ↓
def hello(name):
    return f'hello {name}'

def hi(name):
    return hello(name) 

print(hi('Goa'))

# 5) დაწერეთ ფუნქცია validate_password(password), რომლის შიგნით ჩაშენებული იქნება ფუნქციები.

# validate_password(password) უნდა იყენებდეს სამ შიდა ფუნქციას:

# • has_min_length()
# ამოწმებს, შეიცავს თუ არა პაროლი მინიმუმ 8 სიმბოლოს
# აბრუნებს True ან False

# • has_digit()
# ამოწმებს, შეიცავს თუ არა პაროლი ციფრს
# აბრუნებს True ან False

# • has_uppercase()
# ამოწმებს, შეიცავს თუ არა პაროლი Uppercase ასოს
# აბრუნებს True ან False
def validate_password(password):
    for i in password:
        if len(password) >= 8:
            return True
        elif len(password) < 8:
            return False
        elif i in '1' and '2' and '3' and '4' and '5' and '6' and '7' and '8' and '9' and '0':
            return True
        elif i not in '1' and '2' and '3' and '4' and '5' and '6' and '7' and '8' and '9' and '0':
            return False
        elif i in i.upper():
            return True
        elif i not in i.upper():
            return False
        else:
            return False

print(validate_password('HELLOSUI7')) # True