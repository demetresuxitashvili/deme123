// 1) დაწერეთ while loop პროგრამა: შეეკითხეთ მომხმარებელს პაროლი, იქამდე სანამ არ შემოიტანს სწორ მნიშვნელობას.
let imputer = prompt('enter a password: ')
let check_pass = prompt("enter a correct password: ")

while(imputer !== check_pass){
    console.log('invalid try again')
    console.log(prompt("enter a password again: "))
    console.log(prompt("enter a correct password again: "))
}
console.log("correct")

// 2) while loop-ის გამოყენებით გამოიტანეთ რიცხვები 1-დან 15-ის ჩათვლით.
let x = 0

do{
    console.log(x)
    x ++
}
while(x < 15)

// 3) while loop-ის გამოყენებით გამოიტანეთ რიცხვები 200-დან 0-ის ჩათვლით.
let y = 200
do{
    console.log(y)
    y --
}
while(y > 0)

// 4) კომენტარის სახით ახსენით, თუ რაში გვჭირდება do while loop და რითი განსხვავდება იგი ჩვეულებრივი while loop-ისგან.
// პირველი გამოაქ do ხოლო მერე შეგიძლია მიუწერო while მაგალითად როგორ გამოიტანოს 0 > 10 დო ვაილით:
let lstn = 0
do{
    console.log(lstn)
    lstn ++
}
while(lstn > 10)