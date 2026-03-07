# მომხმარებელს შემოატანინეთ 5 რიცხვი, რომლებსაც შემდეგ სიაში შენახავთ. Indexing-ს გამოყენებით გამოიტანეთ სიის ორი შუა ელენეტი.
num = [str(input("enter a number: ")), str(input("enter a number: ")), str(input("enter a number: ")), str(input("enter a number: ")), str(input("enter a number: "))]
print(num[1:3])

#  მოცემული გაქვთ ცვლადი 
# alphabet ="abcdefghijklmnopqrstuvwxyz"
# Slicing-ის საშუალებით გამოიტანეთ ჯერ სტრინგის პირველი ხუთი სიმბოლო,
#  შემდეგ ბოლო 5 სიმბოლო. 
# ბოლოს ორივე ცალ-ცალკე შემოაბრუნეთ, შეაერთეთ და დაბეჭდეთ.
alphabet ="abcdefghijklmnopqrstuvwxyz"
int = alphabet[:5]
int1 = alphabet[-5:]
print(int)
print(int1)
print(int+int1)

# მოცემულია სტრინგი: text = "IndexingAndSlicingIsPowerful"
#  ამოიღეთ text ცვლადიდან სიტყვა "Indexing". შემდეგ შეაბრუნეთ და გამ მნიშვნელობის ყოველი მესამე ელემენტი ამოიტანეთ შედეგის სახით ეკრანზე.
text = "IndexingAndSlicingIsPowerful"
print(text[:8])

# მომხმარებელს შემოატანინეთ რამოდენიმე ჯანსაღი საკვები, შეინახეთ ცვლადში. შეაბრუნეთ და ბოლო 3 ელემენტი გამოიტანეთ ეკრანზე უარყოფითი Indexing-ის საშუალებით
food = [input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: "), input("enter a fast food: ")]
print(food[2::-1])
