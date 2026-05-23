// codewars გვქონდა და გავაკეთე ყველა

// 1) შექმენით 2 ღილიაკი ერთი dark mode მეორე light mode დაკლიკებისას საიტის background-დს უნდა მიიჭოს შესაბამისი ფერი (შავი ან თეთრი) გამოიყენეთ localstorage რისი დახმარებითაც საიტის დახურვის შედეგად  ან გადარეფრეშების დროს არ უნდა დაუბრუნდეს backgound ი საწყის ფერს.

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")

btn1.addEventListener("click", () => {
    document.body.style.backgroundColor = "black"
    localStorage.setItem("color", "black")
})

btn2.addEventListener("click", () => {
    document.body.style.backgroundColor = "white"
    localStorage.setItem("color", "white")
})

document.body.style.backgroundColor = localStorage.getItem("color")

// 2) შექმენით counter-ი 'მთვლელი" და 2 ღილაკი '+' და '-' ღილაკებზე დაკლიკების შედეგად counter ი უნდა იცვლებოდეს ემატებოდეს/აკლდებოდეს 1-ი, საიტის დარეფრეშებისას ან ჩახურვისას იგივე  უნდა დარჩეს counter ის ველიუ და არ უნდა განულდეს
let p = document.getElementById("p")

let btn3 = document.getElementById("btn3")  
let btn4 = document.getElementById("btn4")

btn3.addEventListener("click", () => {
    p.textContent ++
    localStorage.setItem("count", p.textContent)
})

btn4.addEventListener("click", () => {
    p.textContent --
    localStorage.setItem("count", p.textContent)
})

p.textContent = localStorage.getItem("count")