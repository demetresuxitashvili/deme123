// 1) შექმენით ობიექტი სახელად book, რომელსაც ექნება თვისებები: title, author და year შემდეგ, console.log()-ით გამოიტანეთ წიგნის ავტორი.
const book = {
    title: "iuri boyka",
    author: "boyka",
    year:  "2016"
}

console.log(book)
console.log(book.author)

console.log("--------------------------------")

// 2) გამოიყენეთ წინა დავალებაში შექმნილი book ობიექტი. შეცვალეთ წიგნის year property უფრო ახალი წლით და დაბეჭდეთ მთლიანი ობიექტი კონსოლში.
book.year = "2017"

console.log(book)
console.log(book.year)

console.log("--------------------------------")

// 3) შექმენით ობიექტი user, რომელსაც ექნება თვისებები name და age. შემდეგ, დაამატეთ ამ ობიექტს ახალი თვისება email. ბოლოს, დაბეჭდეთ ობიექტი.
const user = {
    name: "deme",
    age: 11
}

user.email = "qweqwe@gmail.com"

console.log(user)
console.log(user.email)

console.log("--------------------------------")

// 4) შექმენით ობიექტი calculator, რომელსაც ექნება ორი property: num1 და num2. დაამატეთ ამ ობიექტს მეთოდი add, რომელიც დააბრუნებს num1-ისა და num2-ის ჯამს. გამოიძახეთ ეს მეთოდი და დაბეჭდეთ შედეგი
const calculator = {
    num1: 60,
    num2: 7,

    add: function(){
        return this.num1 + this.num2
    }
}

console.log(calculator)
console.log(calculator.add())

console.log("--------------------------------")

// 5) შექმენით ობიექტი person, რომელსაც ექნება property firstName, lastName და მეთოდი sayHello. მეთოდმა უნდა გამოიტანოს "გამარჯობა, მე ვარ [სახელი] [გვარი]".

const person = {
    firstName: "დემეტრე",
    lastName: "სუხიტაშვილი",

    sayHello: function(){
        return `მე ვარ ${this.firstName} ${this.lastName}`
    }
}

console.log(person)
console.log(person.sayHello())

console.log("--------------------------------")