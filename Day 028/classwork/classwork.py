# სიტყვა "Motorcycle"-იდან Slicing-ის მეშვეობით გამოიტანეთ ცალკე "Motor" და ცალკე "cycle"
x = 'Motorcycle'
print(x[:5])
print(x[5:])

# fruits = ["Mango", "Melon", "Cherry", "Pear", "Watermelon"]
# მოცემული სიიდან გამოიტანეთ ელემენტები - Cherry, Pear, Watermelon.
fruits = ["Mango", "Melon", "Cherry", "Pear", "Watermelon"]
print(fruits[2:])

# colors = ["red", "green", "blue", "black", "White", "Brown"]
# მოცემული სიიდან გამოიტანეთ მხოლოდ red, green, blue
colors = ["red", "green", "blue", "black", "White", "Brown"]
print(colors[:3])

# ახსენით თუ რატომ გამოდის პასუხი სიის სახით, მას შემდეგ რაც სიაზე ვიყენებთ Slicing-ს.
# list-იდან ყველა პასუხი იწერება ფრჩხილით და პრჭყალით ჩვეულებრივი ლისთითაც და ყველანაირად თუ ცვლად გამოვიყენებთ ეგრევე გამოიტანს და აღარ გამოიტანს პრჭყალებს და ფრჩხილებს