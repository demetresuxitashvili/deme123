# 2) გადაიმეორეთ Lambda და თავიდან შეასრულეთ Level 110-ის დავალებები.
# kargi

# 3) კომენტარის სახით დაწერეთ, თუ რაში ვიყენებთ map და filter ფუნქციებს. მოიყვანეთ თითო მაგალითი.
# ფილტერი ფილტრავს და გამოაქ და მაპით შეგვიძლია კიდევ შევცვალოთ და ეგრეც გამოვიტანოთ და რაღაც მათემატიკური ოპერაციები ჩავატაროთ

# 4) მოცემულია სია celsius = [0, 25, 100, -10, 37]
# გადააქციეთ Celsius-ები Kelvin-ში map-ის გამოყენებით.

# Hint:ფორმულა Kelvin = Celsius + 273
celsius = [0, 25, 100, -10, 37]

map_kelvin = list(map(lambda num: num + 273, celsius))

print(map_kelvin)

# 5) შექმენით რიცხვების სია. map-ის გამოყენებით შეინახეთ სიის თითოეული ელემენტი აყვანილი კვადრატში squared სიაში.
square = [4, 90, -124, 412]

map_square = list(map(lambda nums: nums * nums, square))

print(map_square)

# 6) 5 მომხმარებელს შემოატანინეთ სახელი input-ით, შემდეგ კი შეინახეთ usernames სიაში.
# გამოიყენეთ map, იმისთვის რომ თითოეულ სახელს წინ დაუწეროთ "Welcome". განახლებული შედეგი შეინახეთ სიაში სახელწოდებით greet_users.
# user_name = input('enter your name: ')

# welcome_name = list(map(lambda char: f'welcome {char}', user_name))

# print(welcome_name)

# 7) შექმენით Dict, მასში შეინახეთ key და value წყვილებად მანქანის დასახელება და მისი გამოშვების წელი. გამოიყენეთ filter, რომ old_years ცვლადში შეინახოთ მხოლოდ 2000-წლამდე გამოშვებული მანქანები (სიის სახით).
cars = {
    ('BMW E30', 1982),
    ('Toyota prus', 2004),
    ('volswagen golf mk2', 1981),
    ('BMW X5', 2001),
    ('mercedes benz w124', 1984)
}

filter_cars_year = list(filter(lambda item: item[1] <= 2000), cars)

print(filter_cars_year)

# 8) 5 მომხმარებელს შემოატანინეთ სახელი input-ით, შემდეგ კი შეინახეთ usernames სიაში. 
# გამოიყენეთ filter, რომ filtered_users სიაში მხოლოდ შეინახოთ სახელები, რომელთა სიმბოლოების რაოდენობაც 5-ს აღემატება.
user_name = input('enter your name: ')

filter_users = list(filter(lambda char: len(char) >= 5, user_name))

print(filter_users)