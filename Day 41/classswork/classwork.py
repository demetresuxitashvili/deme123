# 1) კომენტარის სახით ახსენით რას აკეთებს len(), append(), insert() და pop() ფუნქციები
# len გვიჩვენებს რამდენი სიტყვა მაგალითად შენახილი ცვლადში, append-ი ბოლოს უწერს რამეს მაგალითად ლისტში რამე რო გეწეროთ და გინდათ ბოლოს რაღაც დაამატოთ, insert-ი ამატებს რამე სიტყვას, pop-ი კი ამოიღებს რაიმე ტექსტს

# 2) შექმენით სია და შეინახეთ  5 სახელი. მომხმარებელს შემოატანინეთ სახელი და დაამატეთ ამ სიაში. ბოლოს, დაბეჭდეთ ამ სიის სიგრძე და სიის განახლებული ვერსია.
names = ["deme", "semi", "yuri", "lika", "tamo"]

user_name = input("enter your names: ")

names.append(user_name)
print(names)

# 3) შექმენით სია: fruits = ["Melon", "Orange", "Cantaloupe", "Watermelon", "Kiwi"]
# ამოაგდეთ სიიდან ბოლო ელემენტი და მესამე ინდექსზე ჩასვით "Pomegranate".
fruits = ["Melon", "Orange", "Cantaloupe", "Watermelon", "Kiwi"]
fruits.pop(-1)
fruits.insert(3,"Pomegranate")
print(fruits)