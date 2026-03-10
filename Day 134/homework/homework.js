// 2) შექმენით ღილაკი. როდესაც მომხმარებელი დააჭერს ღილაკს, კონსოლში უნდა დაიწეროს:
// "Button clicked"
const btn1 = document.getElementById("btn1")

btn1.addEventListener("click", () => {
    console.log("Button clicked")
})

// 3) HTML-ში შექმენით პარაგრაფი, რომელშიც ჩაწერთ 'Hello'-ს. დაამატეთ ღილაკი სახელით Change text. ღილაკზე დაჭერამ პარაგრაფის ტექსტი უნდა შეცვალოს 'Hello' -> 'Hello Javascript'.
const p1 = document.getElementById("p1")

const b2 = document.getElementById("b2")

b2.addEventListener("click", () => {
    p1.innerHTML = "Hello javascript"
})

// 4) შექმენით ღილაკი, რომელიც დაჭერისას body-ს background color-ს შეცვლის (მაგალითად lightblue-ზე). ასევე დაამატეთ საიტზე ფოტოც. ამავე ღილაკზე mouseover-მა უნდა გაადიდოს ფოტოს სიგანე, mouseout-მა კი დააპატარაოს.
const b3 = document.getElementById("b3")
const body = document.getElementById("body")
const img1 = document.getElementById("img1")
img1.style.width = "50px"
img1.style.height = "50px"

b3.addEventListener("click", () => {
    body.style.background = "lightblue"
})

b3.addEventListener("mouseover", () => {
    img1.style.width = "100px"
})

b3.addEventListener("mouseout", () => {
    img1.style.width = "50px"
})

// 5) შექმენით div-ი. როდესაც მაუსს მიიტანთ div-ზე - მისი ფერი გახდეს ლურჯი როცა მაუსს მოაშორებთ კი დაბრუნდეს თეთრ ან შავ ფერზე.
const div = document.getElementById("box-1")
div.style.backgroundColor = "black"
div.style.width = "150px"
div.style.height = "150px"

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "blue"
})

div.addEventListener("mouseout", () => {
    div.style.backgroundColor = "black"
})

// 6) შექმენით ღილაკი, რომელიც დაჭერისას ახალ <li> ელემენტს დაამატებს  დალაგებულ list-ში მსგავს ფორმატში:
// Item 1  
// Item 2  
// Item 3
const b4 = document.getElementById("b4")
const ol = document.getElementById("ol")

b4.addEventListener("click", () => {
    const li = document.createElement("li")
    const li2 = document.createElement("li")
    const li3 = document.createElement("li")
    li.textContent = "item1"
    ol.appendChild(li)
    li2.textContent = "item2"
    ol.appendChild(li2)
    li3.textContent = "item3"
    ol.appendChild(li3)
})

// 7) მეექვსე დავალების სიაზე დაამატეთ ასეთი ფუნქციონალი:
// დაუმატეთ სიას remove ღილაკი.
// ღილაკზე დაჭერისას სიის ბოლო ელემენტი  უნდა წაიშალოს. (გაიხსენეთ დღეს ნასწავლი მეთოდი).
const b5 = document.getElementById("b5")

b5.addEventListener("click", () => {
    ol.remove(-1)
})

// ❗BONUS❗
// 8) შექმენით counter.
// გექნებათ ერთი h1, რომელიც default-ად 0 იქნება. დაამატეთ ორი ღილაკი - increase და decrease. increase ღილაკზე დაჭერამ heading-ის ტექსტი (რიცხვი) ერთით უნდა გაზარდოს. decrease-მა კი პირიქით უნდა შეამციროს.
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const h1 = document.getElementById("h1")

b6.addEventListener("click", () => {
    h1.textContent ++
})

b7.addEventListener("click", () => {
    h1.textContent --
})