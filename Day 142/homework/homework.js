let btn = document.getElementById("btn")
let box = document.getElementById("box")
let input = document.querySelector("input")
let btn2 = document.getElementById("btn2")
let ul = document.getElementById("ul-list")
let curency = 300

btn.addEventListener("click", () => {
    let li = document.createElement("li")
    li.textContent = input.value
    ul.appendChild(li)
    curency += 50
    box.style.height = curency + "px"
    input.value = ""
})