# 2) მომხმარებელს შემოატანინეთ რამდენიმე სიტყვა და შეინახეთ ისინი სიაში.
# საბოლოოდ დაბეჭდეთ ამ სიის სიგრძე len() ფუნქციის გამოყენებით. 
lists = [input("enter a text: "), input("enter a text: "), input("enter a text: ")]
print(lists, "სიაში შენახულია", len(lists), "სიტყვა")

# 3) შექმენით ცარიელი სია. მომხმარებელს 3-ჯერ შემოატანინეთ რაიმე მონაცემი და ყოველ ჯერზე დაამატეთ ის სიაში append() ფუნქციით.
# ბოლოს დაბეჭდეთ სია.
# ცარიელი სიის შექმნა
lists1 = []

for i in range(3):
    item = input("enter a text: ")
    lists1.append(item)
print(lists1)

# 4) შექმენით Fruits სია 4 ელემენტით.
# მომხმარებელს შემოატანინეთ ახალი ხილი და ჩასვით ის სიის მეორე ინდექსზე.
# საბოლოოდ ტერმინალში გამოიტანეთ განახლებული სია.
Fruits = ["apple", "grape", "stravbery", "green apple"]
print("dis is the old fruits lists", Fruits)

user_fruits = input("enter a fruits: ")
Fruits.insert(2, user_fruits)
print("dis is the new fruits lists", Fruits)

# 5) შექმენით სია [“car”, “bike”, “bus”, “train”, “plane”].
# ჯერ სიიდან ამოაგდეთ მეოთხე ინდექსზე მყოფი ელემენტი, შემდეგ კი ბოლო ელემენტი და გამოიტანეთ მთლიანი სია ეკრანზე.
lists2 = ["car", "bike", "bus", "train", "plane"]
lists2.pop(4)
lists2.pop()
print(lists2)