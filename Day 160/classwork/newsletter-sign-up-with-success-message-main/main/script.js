let Email = document.getElementById("Email")
let btn1 = document.getElementById("btn1")
let form = document.getElementById("form")
let p5 = document.getElementById("p5")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let p6 = document.getElementById("p6")
let btn2 = document.getElementById("btn2")

btn1.addEventListener("click", () => {
    if(Email.value === "" || !Email.value.includes("@") || !Email.value.endsWith(".com")){
        Email.style.border = "2px solid red"
        Email.style.backgroundColor = "hsl(4, 100%, 67%)"
        Email.style.color = "red"
        p5.style.display = "block"
        form.style.marginTop = "-210px"
    }
    else if(Email.value !== "" || Email.value.includes("@") || Email.value.endsWith(".com")){
        localStorage.setItem("email", Email.value)
        box1.style.display = "none"
        box2.style.display = "inline-block"
        p6.textContent = `A confirmation email has been sent to 
        ${localStorage.getItem("email")} Please open it and click
        the button inside to confirm your subscription.`
    }
})

btn2.addEventListener("click", () => {
    box2.style.display = "none"
    box1.style.display = "inline-block"
    Email.style.backgroundColor = "white"
    p5.style.display = "none"
    Email.style.border = "none"
    Email.style.borderRadius = "6px"
    Email.style.color = "black"
    Email.value = ""
})