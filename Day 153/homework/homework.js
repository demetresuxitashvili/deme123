let btn1 = document.getElementById("btn1")
let name1 = document.getElementById("name")
let surename1 = document.getElementById("surename")
let gender1 = document.getElementById("gender")

btn1.addEventListener("click", () => {
    if(name1.value === "" || surename1.value === "" || gender1.value === ""){
        alert("please enter text")
        return;
    }
    localStorage.setItem(new Date().getMilliseconds(), `name: ${name1.value}, surename: ${surename1.value}, gender: ${gender1.value}`)
    
    name1.value = ""
    surename1.value = ""
    gender1.value = ""
}) 