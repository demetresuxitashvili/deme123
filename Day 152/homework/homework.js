let list = document.getElementById("list")
let btn = document.getElementById("btn")
let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")
let box = document.getElementById("box")
let count = 0

btn.addEventListener("click", () => {
    let li = document.createElement("li")
    let p1 = document.createElement("p")
    let remove = document.createElement("button")
    let edit = document.createElement("button")
    if(inp1.value === ""){
        alert("please enter book's name and author!")
        return;
    }
    else if(inp2.value === ""){
        alert("please enter book's name and author!")
        return;
    }
    remove.id = "remove"
    edit.id = "edit"
    list.appendChild(li)
    li.textContent = inp1.value
    li.appendChild(p1)
    p1.textContent = inp2.value
    li.appendChild(remove)
    remove.textContent = "remove"
    li.appendChild(edit)
    edit.textContent = "edit"
    remove.style.marginLeft = "190px"
    count += 250
    box.style.height = `${count}px`
    remove.addEventListener("mouseover", () => {
        li.style.color = "red"
        p1.style.color = "red"
        li.style.textDecoration = "line-through"
        p1.style.textDecoration = "line-through"
        li.style.transition = "1s"
        p1.style.transition = "1s"
        remove.style.backgroundColor = "red"
    })
    remove.addEventListener("mouseout", () => {
        li.style.color = "white"
        p1.style.color = "grey"
        li.style.textDecoration = "none"
        p1.style.textDecoration = "none"
        remove.style.backgroundColor = "white"
        remove.style.transition = "1s"
    })
    remove.addEventListener("click", () => {
        count -= 250
        li.remove()
        box.style.height = `${count}px`
    })
    edit.addEventListener("click", () => {
        let prompt1 = prompt("enter what do you want change in book's name")
        let prompt2 = prompt("enter what do you want change in book's author")
        if (!prompt1 || !prompt2) {
            alert("please enter book's name and author what do you want to change")
            return;
        }
        li.firstChild.textContent = prompt1
        p1.textContent = prompt2
    })
    localStorage.setItem(Date.now() + "-book", inp1.value)
    localStorage.setItem(Date.now() + "-author", inp2.value)
    inp1.value = ""
    inp2.value = ""
})