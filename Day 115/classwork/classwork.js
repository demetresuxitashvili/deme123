// 1) დაწერეთ საშინაო დავალებაში მოცემული სავარჯიშო (რაც დღეს გავარჩიეთ), თუმცა ეს პროგრამა უნდა იყოს case-insensitive

// მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.
user_input = prompt("enter your password: ").toLowerCase()
user_pass = 'admin123'

while(user_input !== user_pass){
    console.log("wrong password try again!")
    user_input = prompt("enter yor password: ").toLowerCase()
    break
}
console.log("acess granted")

// 2) შექმენით 6-ელემენტიანი მასივი. გამოიყენეთ at() პირველი და ბოლო ელემენტების დასაბეჭდად. შემდეგ კი სიიდან ამოშალეთ ყველა ის ელემენტი, რომელთა სიგრძეც 5-ს აღემატება.
num = [1, 3, 12, 5, 4, 2]

num.at(0)
num.at(-1)

for(let i = 0; i < num.length(); i ++){
    if(num <= 5){
        num.splice(i, 1)
    }
}

// 3) დაწერეთ while loop, რომელიც 1-დან 10-მდე დაბეჭდავს რიცხვებს. 3-ის ჯერად რიცხვებზე დაბეჭდოს 'Fizz', 5-ის ჯერად რიცხვებზე 'Buzz'. ორივეზე ერთად 'FizzBuzz'.

// როდესაც რიცხვების count მიაღწევს 45-ს => გაწყვიტეთ პროგრამა.

let num2 = 1

while(num2 > 50){
    if(num2 /3){
        console.log('Fizz')
    }
    else if(num2 / 5){
        console.log('Buzz')
    }
    else if(num2 === 45){
        break
    }
}