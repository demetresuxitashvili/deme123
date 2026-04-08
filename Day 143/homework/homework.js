let btn = document.getElementById("btn")
let box = document.getElementById("box")
let input = document.querySelector("input")
// let btn2 = document.getElementById("btn2")
let ul = document.getElementById("ul-list")
let curency = 300

btn.addEventListener("click", () => {
    let li = document.createElement("li")
    let remove2 = document.createElement("button")
    let edit = document.createElement("button")
    if(input.value === ""){
        alert("please enter text!")
        return;
    }
    remove2.textContent = "remove"
    remove2.id = "btn2"
    edit.textContent = "edit"
    edit.id = "btn3"
    li.textContent = input.value
    ul.appendChild(li)
    li.appendChild(remove2)
    li.appendChild(edit)
    remove2.style.transform = "270px"
    remove2.style.marginTop = "-5px"
    remove2.style.border = "none"
    remove2.style.width = "60px"
    remove2.style.height = "40px"
    remove2.style.borderRadius = "5px"
    edit.style.border = "none"
    edit.style.width = "60px"
    edit.style.height = "40px"
    edit.style.borderRadius = "5px"
    curency += 50
    box.style.height = curency + "px"
    input.value = ""
    remove2.addEventListener("click", () => {
        li.remove()
        curency -= 50
        box.style.height = curency + "px"
        input.value = ""
    })
    edit.addEventListener("click", function (){
        let input2 = prompt("enter what do you want to change: ")
        if(input2.length === 0){
            return;
        }
        li.textContent = input2
        remove2.textContent = "remove"
        remove2.id = "btn2"
        edit.textContent = "edit"
        edit.id = "btn3"
        li.textContent = input2
        ul.appendChild(li)
        li.appendChild(remove2)
        li.appendChild(edit)
        remove2.style.transform = "270px"
        remove2.style.marginTop = "-5px"
        remove2.style.border = "none"
        remove2.style.width = "60px"
        remove2.style.height = "40px"
        remove2.style.borderRadius = "5px"
        edit.style.border = "none"
        edit.style.width = "60px"
        edit.style.height = "40px"
        edit.style.borderRadius = "5px"
    })
})
