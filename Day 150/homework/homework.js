// 1) შექმენით Class - ი სახელად Person, მის constructor - ს გადაეცით name, age, country მნიშვნელობები. თქვენი დავალებაა, რომ შექმნათ Class - ში ახალი მეთოდი სახელად introduce რომელიც console-ში გამოიტანს მომხმარებლის ინფორმაციას მაგალითად `Hello my name is ${name} , i am ${age} years old and I am from ${country}`, შექმნით ხუთი მომხმარებლის ობიექტი და გამოიძახეთ შესაბამისი მეთოდი
class Person{
    constructor(name, age, country){
        this.name = name
        this.age = age
        this.country = country
    }
    get introduce(){
        return `Hello my name is ${this.name} , i am ${this.age} years old and I am from ${this.country}`
    }
}

let person = new Person("deme", 11, "Georgia")
let person2 = new Person("luka", 12, "Georgia")
let person3 = new Person("aleqsandre", 13, "Georgia")
let person4 = new Person("nika", 13, "Georgia")
let person5 = new Person("andria", 13, "Georgia")

console.log(person.introduce)
console.log(person2.introduce)
console.log(person3.introduce)
console.log(person4.introduce)
console.log(person5.introduce)

// 2) შექმენით Class - ი სახელად Rectangle, მის constructor - ს გადაეცით ორი მნიშვნელობა width, height, შექმენით მეთოდი სახელად getarea რომელიც გამოითვლის ამ rectangle - ის ფართობს და getPerimeter რომელიც გამოითვლის მის პერიმეტრს. შექმენით სამი ობიექტი და გამოიძახეთ შესაბამისი მეთოდები
class Rectangle{
    constructor(width, height){
        this.width = width
        this.height = height
    }
    get getArea(){
        return this.width * this.height
    }
    get getPerimeter(){
        return this.width + this.height
    }
}

let rectangle1 = new Rectangle(50, 50)
let rectangle2 = new Rectangle(60, 60)
let rectangle3 = new Rectangle(40, 40)

console.log(rectangle1.rectangle)
console.log(rectangle2.rectangle)
console.log(rectangle3.rectangle)

console.log(rectangle1.getPerimeter)
console.log(rectangle2.getPerimeter)
console.log(rectangle3.getPerimeter)

// 3) შექმენი კლასი სახელად Book, რომლის constructor იღებს title,pages,year მნიშვნელობებს,შექმენი მეთოდი სახელად getBookInfo თუ pages > 300 დააბრუნოს: This book is called ${title}, it has ${pages} pages and was released in ${year}. შექმენით სამ ობიექტი და გამოიძახეთ შესაბამისი მეთოდები
class Book{
    constructor(title, pages, year){
        this.title = title
        this.pages = pages
        this.year = year
    }
    get getBookInfo(){
        if(this.pages > 300){
            return `This book is called ${this.title}, it has ${this.pages} pages and was released in ${this.year}.`
        }
        else{
            return ""
        }
    }
}

let book1 = new Book("fepxis tyaosani", 400, 1712)
let book2 = new Book('data tutaskhia', 700, 1975)
let book3 = new Book("deda ena", 200, 1876)

console.log(book1.getBookInfo)
console.log(book2.getBookInfo)
console.log(book3.getBookInfo)

// 4) შექმენით კლასი სახელად Student, რომლის constructor - ი მიიღებს ორ მნიშვნელობას: name და score.შექმენით მეთოდი სახელად checkResult, რომელიც შეამოწმებს სტუდენტის ქულას და დააბრუნებს შესაბამის ტექსტს. თუ სტუდენტის ქულა არის 75-ზე მეტი ან ტოლი, მეთოდმა უნდა დააბრუნოს `Student ${name} successfully passed the exam with a score of ${score}`, სხვა შემთხვევაში უნდა დააბრუნოს `Student ${name} failed the exam with a score of ${score}`
class Student{
    constructor(name, score){
        this.name = name
        this.score = score
    }
    get checkResult(){
        if(this.score >= 75){
            return `Student ${this.name} successfully passed the exam with a score of ${this.score}.`
        }
        else{
            return `Student ${this.name} failed the exam with a score of ${this.score}`
        }
    }
}

let student1 = new Student("vigaca", 74)
let student2 = new Student("deme", 75)

console.log(student1.checkResult)
console.log(student2.checkResult)