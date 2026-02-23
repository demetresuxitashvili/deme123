// 2) შექმენით Arrow ფუნქცია, რომელიც მიიღებს მომხმარებლის ასაკს.
// თუ ასაკი არის 18 ან მეტი, დაბეჭდოს ტექსტი: "You're an adult"
// სხვა შემთხვევაში დაბეჭდოს ტექსტი: "You are not an adult".

// ეს ფუნქცია დაწერეთ ერთ ხაზში და გამოიყენეთ Ternary Operator-ი.
let filter_age = (age) => age >= 18 ? console.log("You're an adult") : console.log("you are not adult.")

console.log(filter_age(18))

// 3) შექმენით Arrow ფუნქცია, რომელიც მიიღებს ტექსტს და დააბრუნებს ამ ტექსტში არსებული ასოების რაოდენობას. შეასრულეთ ერთ ხაზში.
let len = (name) => name.length

console.log(len("deme"))
console.log(len("demetre"))

// 4) შექმენით Arrow ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ყველა ელემენტის ჯამს. შეასრულეთ ერთ ხაზში.
let sum = (num) => {
    res = 0
    for(let i = 0; i < num.length; i ++){
        res += num[i]
    }
    return res
}
console.log(sum([12, 12, 12, 12]))

// 5) შექმენით Arrow ფუნქცია, რომელიც დააბრუნებს რიცხვის კვადრატს. შეასრულეთ ერთ ხაზში.
let number = (num) => num ** 2

console.log(number(10))

// 6) შეასრულეთ მოცემული codewars:
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript