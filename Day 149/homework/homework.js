// 2) შექმენი ობიექტი user, კუთვნილებებით: name, age, city. თქვენი ამოცანაა დესტრუქტურიზაციის გამოყენებით ამოიღოთ ცვლადებში name, age და city

// let user = {
//     name: "deme",
//     age: 11, 
//     city: "gori"
// }

// let {name, age, city} =  user

// console.log(name)
// console.log(age)
// console.log(city)

// 3) მოცემულია მასივი colors. დესტრუქტურიზაციის გამოყენებით პირველი ორი ფერი შეინახეთ ცვლადებში first და second, ხოლო დანარჩენი ფერები მოათავსეთ ახალ მასივში სახელად others (გამოიყენეთ Rest ოპერატორი).

// const colors = ["Black", "Red", "Blue", "Yellow", "Purple"];

const colors = ["Black", "Red", "Blue", "Yellow", "Purple"];

const [first, second, ...others] = colors;

console.log(first)
console.log(second)
console.log(others)

// 4) შექმენით ორი მასივი: fruits1, fruits2. შექმენით მესამე მასივი allFruits, რომელიც შეიცავს ორივე მასივის ელემენტებს Spread ოპერატორის გამოყენებით.
let fruits1 = ["apple", "watermelon"]

let fruits2 = ["mango", "grape", "melon", "starwberry", "coconut"]

let allFruits = [...fruits1, ...fruits2]

console.log(allFruits)

// 5) შექმენით ობიექტი updatedStudent, რომელიც იქნება student ობიექტის ასლი, მაგრამ მასში grade იქნება შეცვლილი (მაგალითად: "A") და დამატებული ექნება ახალი თვისება isGraduated: true.
let student = {
    name: "deme",
    grade: "F"
}

let updatedStudent = {
    ...student, 
    grade: "A",
    isGraduated: true
}

console.log(student)
console.log(updatedStudent)

// 6) დაწერე ფუნქცია calculateTotal, რომელიც მიიღებს განუსაზღვრელი რაოდენობის რიცხვებს (Rest), შეკრებს მათ და დააბრუნებს ჯამს.


// BONUS
// -----
// გაქვს ობიექტი, სადაც ჩაშენებულია (nested) ობიექტი:

// const company = {
//   title: "Smart Tech",
//   location: {
//     city: "Tbilisi",
//     street: "Tsereteli Street"
//   }
// };

// დესტრუქტურიზაციის გამყენებით ერთ ხაზში ამოიღეთ ცვლადში პირდაპირ city.

function calculateTotal(...numbers){
    let res = 0
    for(let i of numbers){
        res += i
    }
    return res
}

console.log(calculateTotal(12123123, 32111111111111111, 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999, 3123123213123123213123123,))


const company = {
    title: "Smart Tech",
    location: {
    city: "Tbilisi",
    street: "Tsereteli Street"
    }
};

// პირველი გზა
console.log(company.location.city)

// მეორე გზა
let {location: {city}} = company
console.log(city)