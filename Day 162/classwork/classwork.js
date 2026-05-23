// შექმენი ცვლადი ტექსტით: const message = "This is Group 71".
// setInterval- ის გამოყენებით, ყოველ 0.4 წამში ეკრანზე გამოაჩინე ამ ტექსტის მომდევნო ასო (ჯერ "T", შემდეგ "Th", შემდეგ "Thi"...). 
// დააბრუნეთ წინადადება აწყის ადგილას. ანუ კოდმა უნდა დაიწყოს პირიქით წაშლა სიმბოლოების მიხედვით. როდესაც მთლიანი წინადადება წაიშლება, გამოიყენე clearInterval, რათა კოდი შეწყდეს.
const item = document.getElementById("h1")
const message = "This is Group 71"
let charCount = 0
let direction = 1

const typeInterval = setInterval(() => {
    item.textContent = message.slice(0, charCount)
    charCount += direction

    if(charCount > message.length){
        direction = -1
        charCount = message.length
    }

    else if(charCount < 0){
        direction = 1
        charCount = 0
    }
}, 200)