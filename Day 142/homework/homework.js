let btn = document.getElementById("btn")
let box = document.getElementById("box")
let ul = document.getElementById("ul-list")
let curency = 300

btn.addEventListener("click", () => {
    let input = document.querySelector("input")
    let li = document.createElement("li")
    li.textContent = input.value
    ul.appendChild(li)
    curency += 50
    box.style.height = curency + "px"
    input.value = ""
})