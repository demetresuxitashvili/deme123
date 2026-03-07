# მომხმარებელს შემოატანინეთ 5 რიცხვი, რომლებსაც შემდეგ სიაში შენახავთ. Indexing-ს გამოყენებით გამოიტანეთ სიის ორი შუა ელენეტი.
num = [int(input("enter a number: ")), int(input("enter a number: ")),  int(input("enter a number: ")),  int(input("enter a number: ")),  int(input("enter a number: "))]
print(num[1:3])

# მოცემული გაქვთ ცვლადი 
# alphabet ="abcdefghijklmnopqrstuvwxyz"
# Slicing-ის საშუალებით გამოიტანეთ ჯერ სტრინგის პირველი ხუთი სიმბოლო, შემდეგ ბოლო 5 სიმბოლო. ბოლოს ორივე ცალ-ცალკე შემოაბრუნეთ, შეაერთეთ და დაბეჭდეთ.
alphabet ="abcdefghijklmnopqrstuvwxyz"
x = print(alphabet[:5])
z = print(alphabet[-5:])
b = print(alphabet[::1])
print(x, z, b)

#  მოცემულია სტრინგი: text = "IndexingAndSlicingIsPowerful"
#  ამოიღეთ text ცვლადიდან სიტყვა "Indexing". შემდეგ შეაბრუნეთ და მაგ მნიშვნელობის ყოველი მესამე ელემენტი ამოიტანეთ შედეგის სახით ეკრანზე.
text = "IndexingAndSlicingIsPowerful"
print(text[:8])

# მომხმარებელს შემოატანინეთ რამოდენიმე ჯანსაღი საკვები, შეინახეთ ცვლადში. შეაბრუნეთ და ბოლო 3 ელემენტი გამოიტანეთ ეკრანზე უარყოფითი Indexing-ის საშუალებით
food = [input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: ")]
print(food[:-4:-1])