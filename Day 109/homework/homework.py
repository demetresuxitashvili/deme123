# მოცემული დავალებები შეასრულეთ Lambda-ს გამოყენებით.
# ok

# 2) დაწერეთ ფუნქცია, რომელიც მიიღებს მომხმარებლის სახელს. გვარსა და ასაკს. ფუნქციამ დააბრუნოს მომხმარებლის მონაცემები f სტრინგის გამოყენებით.
user_info = lambda name, surename, age: f'hello {name}, {surename}, your age is {age}'  

print(user_info('demetre', 'sukhitashvili', 10))

# 3) დაწერეთ ფუნქცია, რომელიც გამოითვლის რიცხვების სიის საშუალო არითმეტიკულს.
exam = lambda num1, num2: (num1 + num2) / 2

print(exam(10, 20))

# 4) დაწერეთ ფუნქცია, რომელსაც გადაეცემა სტრინგი. პასუხად დააბრუნეთ არის თუ არა იგი პალინდრომი. (მოიძიეთ თუ რას ნიშნავს Palindrome).
# მოვიძიე: პალინდრომი არის როცა ტექსტს შემოაბრუნებ და ისევ იგივე რჩება ეწოდება პალინდრომი
check_palindrom = lambda text: text == text[::-1]

print(check_palindrom('ana'))
print(check_palindrom('deme'))

# 5) დაწერეთ ფუნქცია, რომელიც აბრუნებს:
# • 'Positive' თუ რიცხვი დადებითია.
# • 'Negative' თუ რიცხვი უარყოფითი.
# • 'Zero' თუ რიცხვი ნულია. 
# გამოიყენეთ Ternary ოპერატორი.
num_func = lambda num: 'positive' if num > 0 else 'negative' if num < 0 else 'zero'

print(num_func(0))
print(num_func(-2))
print(num_func(2))

# 6) დაწერეთ ფუნქცია, რომელიც არგუმენტად მიიღებს სიას. პასუხად დააბრუნოს სიის თითოეული რიცხვი გამრავლებული 2-ზე.
lstn = [21, 65, 85, 79]
multiply_by_two = lambda num1: [i * 2 for i in num1]

print(multiply_by_two(lstn))

# 7) გამოიყენეთ List comprehension და Lambda მოცემული პროგრამის დასაწერად:
# დაწერეთ ფუნქცია, რომელსაც გადასცემთ სტრინგების სიას. ფუნქციამ უნდა დააბრუნოს მხოლოდ ისეთი სტრინგები, რომელთა სიგრძეც 5-ს აღემატება.
filter_five = lambda lstn: [i for i in lstn if len(i) > 5] 

print(filter_five(['deme', 'demetre', 'anamaria', 'lado', 'jemali']))

# 8) გამოიყენეთ List comprehension და Lambda მოცემული პროგრამის დასაწერად:
# დაწერეთ ფუნქცია, რომელსაც გადასცემთ ინტეჯერების სიას. ფუნქციამ უნდა დააბრუნოს მხოლოდ ისეთი რიცხვები, რომლებიც უარყოფითია.
filter_negative = lambda num: [i for i in num if i < 0]

print(filter_negative([3, -2, -5, 2, -7, 8]))