// 2) გაიარეთ მოცემული თავები (ES6 Destructuring-ის ჩათვლით)
// ok

// 3) დაასრულეთ Level 137-ის საშინაო დავალება და გამოასწორეთ კოდში შეცდომები (შემდეგისთვის ფუნქციონალი + დიზაინი სრულყოფილად გქონდეთ)
// გავიარე

// 4) შექმენით form, სადაც გექნებათ ინფუთები:
// • სახელი
// • პაროლი
// • ასაკი

// გამოიყენეთ Form ვალიდაცია, რომ შეამოწმოთ:
// • სახელის ინფუთი აღემატება თუ არა 1 სიმბოლოს.
// • პაროლი არის თუ არა 8 სიმბოლოზე მეტი.
// • ასაკი არის თუ არა 10-ზე მეტი.

// თუ რომელიმე კრიტერიუმი არ შესრულდება - alert-ით გამოიტანეთ შესაბამისი მესიჯი მაგ. სახელი უნდა იყოს 1 სიმბოლოზე მეტი, პაროლი უნდა აღემატებოდეს 8 სიმბოლოს და ა.შ. 
// მომხმარებელს არ მისცეთ ფორმის დადასტურების საშუალება თუ ამ კრიტერიუმებს არ შეასრულებს.

const form1 = document.getElementById("form1")
form1.addEventListener("submit", (e) =>{
    const name = document.getElementById("name").value
    const pass = document.getElementById("pass").value
    const age = document.getElementById("age").value
    
    console.log(name)
    console.log(pass)
    console.log(age)
    
    if(name.length <= 1 ){
        alert("სახელი უნდა იყოს 1 სიმბოლოზე მეტი!")
        e.preventDefault()
    }
    else if(pass.length > 8){
        alert("პაროლი უნდა აღემატებოდეს 8 სიმბოლოს!")
        e.preventDefault()
    }
    else if(age <= 10){
        alert("შენი ასაკი უნდა აღემატებოდეს 10-ს!")
        e.preventDefault()
    }
})


// 5) შექმენით Form, სადაც დაამატებთ age input-ს. დაამატეთ ვალიდაცია, რომ შეამოწმოთ მომხმარებელს მხოლოდ რიცხვები შემოჰყავს თუ არა. თუ ეს კრიტერიუმი არ შესრულდება - alert-ით გამოიტანეთ შესაბამისი მესიჯი. მომხმარებელს არ მისცეთ ფორმის დადასტურების საშუალება თუ ამ კრიტერიუმს არ შეასრულებს.

const form2 = document.getElementById("form2")

form2.addEventListener("submit", (e) => {
    const age2 = document.getElementById("age2").value
    
    console.log(age2)
    
    if(typeof age2 === "Number"){
        console.log(age2)
    }
    else{
        alert("შემოიტანე რიცხვი!")
        e.preventDefault()
    }
})