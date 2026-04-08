let btn = document.getElementById("btn")
let box = document.getElementById("box")
let input = document.querySelector("input")
// let btn2 = document.getElementById("btn2")
let ul = document.getElementById("ul-list")
let curency = 300

btn.addEventListener("click", () => {
    let li = document.createElement("li")
    let remove2 = document.createElement("button")
    if(input.value === ""){
        alert("please enter text!")
        return;
    }
    else if(input.value.length > 5){
        alert("you can enter only five text!")
        return;
    }
    remove2.innerHTML = "remove"
    remove2.id = "btn2"
    li.textContent = input.value
    ul.appendChild(li)
    li.appendChild(remove2)
    // remove2.style.transform = "270px"
    // remove2.style.marginTop = "-5px"
    remove2.style.border = "none"
    remove2.style.width = "60px"
    remove2.style.height = "40px"
    remove2.style.borderRadius = "5px"
    curency += 50
    box.style.height = curency + "px"
    input.value = ""
    remove2.addEventListener("click", () => {
        li.remove()
        curency -= 50
        box.style.height = curency + "px"
        input.value = ""
    })
})
