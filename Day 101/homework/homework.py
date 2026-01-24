# 2) მოცემულია Dictionary:

user = {
    'username': 'John',
    'pass': 'J123',
    'creation year': 2016,
    'creation month': 10,
    'creation day': 28
}

# თქვენი დავალებაა update() მეთოდის გამოყენებით შეცვალოთ 'pass' key-ს მნიშვნელობა 'J1997'-ით, ხოლო 'creation day' key-ს მნიშვნელობა 26-ით. საბოლოოდ დაბეჭდეთ Dict-ის ყველა Item-ი.

user['pass'] = 'J1997'
user['creation day'] = 26
print(user)

# 3) მოცემულია Dictionary:

product_amount = {
    'Bag': 13,
    'Heels': 5,
    'Jeans': 29,
    'Sweatshirt': 14,
    'Sunglasses': 30
}

# გამოიყენეთ update() მეთოდი, რომ  Dict-ში დაამატოთ თქვენთვის სასურველი ახალი key & value მნიშვნელობა.
product_amount.update({'cap': 16})
print(product_amount)

# 4) გამოიყენეთ წინა დავალების Dict-ი, რომ გაანახევროთ 'Sweatshirt' key-ს მნიშვნელობა (რაოდენობა).
product_amount['Sweatshirt'] = 7
print(product_amount)

# 5) შექმენით ნებისმიერი Dict (Min. 5 მნიშვნელობით). გამოიყენეთ List Comprehension, რომ სიაში შეინახოთ  ამ Dict-ის ყველა key.
cars = {
    'mefavoritecar1': 'BMW',
    'mf2': 'mercedes',
    'mf3': 'toyota supra',
    'mf4': 'gtr',
    'mf5': 'ferrary'
}

sia = cars.items()
print(sia)

# 6) შექმენით სია, რომელშიც დაამატებთ მინიმუმ 8 პროგრამირების ენას. გამოიყენეთ List Comprehension, რომ ახალ სიაში შეინახოთ ისეთი პროგრამირების ენები, რომლებიც არ შეიცავენ 'a' ასოს. (პროგრამა დაწერეთ Case-სენსიტიურობის გათვალისწინებით).
languages = {
    'langs1': 'java script',
    'langs2': 'pyton',
    'langs3': 'html',
    'langs4': 'css'
}

not_a = languages['langs2'], languages['langs3'], languages['langs4']

# 7) შექმენით სია, სადაც დაამატებთ თქვენს ფავორიტ მანქანის ბრენდებს. გამოიყენეთ List comprehension, იმისთვის რომ ახალ სიაში დაამატოთ მხოლოდ ისეთი ბრენდები, რომელთა სიმბოლოების რაოდენობა 5-ს არ აღემატება.      

fvcar = {
    'car1': 'supra',
    'car2': 'gtr',
    'car3': 'bmw',
    'car4': 'mercedes',
    'car5': 'ferrary'
}

sia2 = fvcar['car2'], fvcar['car3']
print(sia2)