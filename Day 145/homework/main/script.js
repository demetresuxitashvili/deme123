let submit = document.getElementById("submit")
let bxo2 = document.getElementById("box2")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let p2 = document.getElementById("p2")
let number = 0

btn1.addEventListener("click", () => {
    number = 0
    number += 1
})

btn2.addEventListener("click", () => {
    number = 0
    number += 2
})

btn3.addEventListener("click", () => {
    number = 0
    number += 3
})

btn4.addEventListener("click", () => {
    number = 0
    number += 4
})

btn5.addEventListener("click", () => {
    number = 0
    number += 5
})

submit.addEventListener("click", () => {
    if(number === 0){
        alert("change rating!")
        return;
    }
    box2.style.display = "inline-block"
    p2.textContent = `You selected ${number} out of 5`
})