// 1) საიტზე დაამატეთ 1 პარაგრაფი და 1 ღილაკი.
// ღილაკზე დაჭერისას პარაგრაფს უნდა ეცვლებოდეს ფერი და ხდებოდეს ყვითელი, mouseover-ზე უნდა იცვლებოდეს ზომა და ხდებოდეს 30px, mouseout-ზე კი უბრუნდებოდეს საწყის ზომას.
// პარაგრაფზე დაჭერისას ღილაკს უნდა ეცვლებოდეს ბორდერი დ ეს ბორდერი ხდებოდეს წითელი. mouseover-ზე უნდა იცვლებოდეს ღილაკს ზომა და ხდებოდეს 10px, mouseout-ზე კი იზრდებოდეს ზომაში (25px) და პლიუს background-ის ფერი უნდა ჰქონდეს ნაცრისფერი (grey).
const p = document.getElementById("p1")
const btn = document.getElementById("btn1")

btn.addEventListener("click", () => {
    p.style.color = "yellow"
})

btn.addEventListener("mouseover", () => {
    p.style.fontSize = "30px"
})

btn.addEventListener("mouseout", () => {
    p.style.color = "black"
    p.fontSize = "16px"
})

p.addEventListener("click", () => {
    btn.style.border = "red"
})

p.addEventListener("mouseover", () => {
    btn.style.fontSize = "10px"
})

p.addEventListener("mouseout", () => {
    btn.style.fontSize = "25px"
    btn.style.backgroundColor = "grey"
})