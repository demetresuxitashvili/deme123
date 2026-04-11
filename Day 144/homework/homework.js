let add = document.getElementById("add")
let ul = document.getElementById("musics")
let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")

add.addEventListener("click", () => {
    let li = document.createElement("li")
    let p1 = document.createElement("p")
    let edit = document.createElement("button")
    let remove = document.createElement("button")
    if (inp1.value === "") {
        alert("please enter Song title!")
        return;
    }
    else if (inp2.value === "") {
        alert("please enter artist")
        return;
    }
    p1.id = "p1"
    edit.id = "edit"
    remove.id = "remove"
    ul.appendChild(li)
    li.textContent = inp1.value
    li.appendChild(p1)
    p1.textContent = inp2.value
    li.appendChild(remove)
    remove.textContent = "Remove"
    li.appendChild(edit)
    edit.textContent = "Edit"
    inp1.value = ""
    inp2.value = ""
    remove.addEventListener("mouseover", () => {
        li.style.color = "red"
        p1.style.color = "red"
        li.style.textDecoration = "line-through"
        p1.style.textDecoration = "line-through"
    })
    remove.addEventListener("mouseout", () => {
        li.style.color = "white"
        p1.style.color = "grey"
        li.style.textDecoration = "none"
        p1.style.textDecoration = "none"
    })
    remove.addEventListener("click", () => {
        li.remove()
    })
    edit.addEventListener("click", () => {
        let prompt1 = prompt("enter what do you want change in Song title")
        let prompt2 = prompt("enter what do you want change in Artist")
        if (!prompt1 || !prompt2) {
            Toastify({
                text: "please click Edit and enter text what do you wnat change!",
                duration: 2000,
                gravity: "top",
                position: "center",
                style: {
                    background: "linear-gradient(to right, rgba(178, 71, 254), rgba(207, 72, 212), rgba(237, 59, 167));"
                }
            }).showToast();
            return;
        }
        li.firstChild.textContent = prompt1
        p1.textContent = prompt2
    })
}) 