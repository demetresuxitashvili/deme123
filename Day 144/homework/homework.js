let btn = document.getElementById("btn")
let box = document.getElementById("box")
let input = document.getElementById("input1")
let input2 = document.getElementById("input2")
let btn2 = document.getElementById("btn4")
let ul = document.getElementById("ul-list")
let source = document.getElementById("source")
let curency = 300

btn.addEventListener("click", () => {
    let li = document.createElement("li")
    let remove2 = document.createElement("button")
    let edit = document.createElement("button")
    alert("now enter music link")
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
    curency += 80
    box.style.height = curency + "px"
    input.value = ""
    remove2.addEventListener("click", () => {
        li.remove()
        alert("now enter music artist")
        curency -= 80
        box.style.height = curency + "px"
        input.value = ""
    })
    edit.addEventListener("click", function (){
        let input3 = prompt("enter what do you want to change: ")
        alert("now enter music link")
        if(input2.length === 0){
            return;
        }
        li.textContent = input3
        remove2.textContent = "remove"
        remove2.id = "btn2"
        edit.textContent = "edit"
        edit.id = "btn3"
        li.textContent = input3
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

btn2.addEventListener("click", () => {
    let li = document.createElement("li")
    let remove2 = document.createElement("button")
    let edit = document.createElement("button")
    if(input2.value === ""){
        alert("please enter text!")
        return;
    }
    remove2.textContent = "remove"
    remove2.id = "btn2"
    edit.textContent = "edit"
    edit.id = "btn3"
    li.textContent = input2.value
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
    curency += 80
    box.style.height = curency + "px"
    input2.value = ""
    remove2.addEventListener("click", () => {
        li.remove()
        curency -= 80
        box.style.height = curency + "px"
        input.value = ""
    })
    edit.addEventListener("click", function (){
        let input4 = prompt("enter what do you want to change: ")
        alert("now enter music link")
        if(input2.length === 0){
            return;
        }
        li.textContent = input4
        remove2.textContent = "remove"
        remove2.id = "btn2"
        edit.textContent = "edit"
        edit.id = "btn3"
        li.textContent = input4
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