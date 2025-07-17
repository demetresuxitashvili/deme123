# კომენტარის სახით ახსენით რატომ ვიყენებთ Slicing-ს Python-ში.
# რომ მოვჭრათ/ამოვიჭოთ ელემენტი

# შექმენით რიცხვების სია, სადაც შენახული გექნებათ 10 რიცხვი. Slicing-ის მეშვეობით გამოიტანეთ ამ სიის პირველი ხუთი რიცხვი და გამოიტანეთ ტერმინალში.
number = [2, 7, 8, 9, 10, 1, 3, 4, 5, 6]
print(number[:5])

# ცვლადში შეინახეთ სიტყვა "Goal-Oriented Academy გამოიყენეთ Slicing რათა აქედან დაბეჭდოთ მხოლოდ სიტყვა "Academy".
Goa = "Goal-Oriented Academy"
print(Goa[-7:])

# ცვლადში შეინახეთ სიტყვა "Goal-Oriented Academy" გამოიყენეთ Slicing რათა აქედან დაბეჭდოთ მხოლოდ სიტყვა "Oriented".
goa = "Goal-Oriented Academy"
print(goa[5:14])

#  ცვლადში შეინახეთ თქვენი გვარი. ინდექსინგის საშუალებით გამოიტანეთ თქვენი გვარის პირველი, ბოლო და შუა ასოები.
deme = "sukhitashvili"
print(deme[0:1], deme[5:6], deme[-1:])

#  შექმენით სია colors = ["Black", "Yellow", "Blue", "Purple", "Orange"] სიიდან გამოიტანეთ მხოლოდ Yellow და Black.
colors = ["Black", "Yellow", "Blue", "Purple", "Orange"]
print(colors[:2])

# შეინახეთ ცვლადში "Hello, World!". Slicing-ის საშუალებით ამ სტრინგიდან  ამოიღეთ ცალკე სიტყვა "Hello" და ცალკე სიტყვა "World!". შეინახეთ ისინი  ცვლადებში და გამოიტანეთ ეკრანზე.
world = "Hello World!"
print(world[:5])
print(world[5:])

