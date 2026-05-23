let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let p = document.getElementById("p")

let count = 0

function background(){
    if(count > 0){
        document.body.style.backgroundColor = "green"
        localStorage.setItem("color", "green")
    }
    else if(count < 0){
        document.body.style.backgroundColor = "red"
        localStorage.setItem("color", "red")
    }
    else{
        document.body.style.backgroundColor = "blue"
        localStorage.setItem("color", "blue")
    }
}

btn1.addEventListener("click", () => {
    count ++
    p.textContent = count
    background()
    localStorage.setItem("number", count)
})

btn2.addEventListener("click", () => {
    count --
    p.textContent = count
    background()
    localStorage.setItem("number", count)
})

document.body.style.backgroundColor = localStorage.getItem("color")
p.textContent = localStorage.getItem("number")