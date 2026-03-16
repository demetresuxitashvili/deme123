// 2) შექმენით image slider-ი 5 ფოტოს გამოყენებით. გასტილეთ როგორც ფოტოები, ასევე ღილაკები. დიზაინი მაქსიმალურად დახვეწეთ. ყოველ next ღილაკზე დაკლიკებამ უნდა შეცვალოს საიტის background-ი და ასევე ფოტოს ბორდერის ფერი. previous ღილაკზე დაჭერისას კი Heading-ი "Image Slider"-ი უნდა დაპატარავდეს.
let images = ["https://i0.wp.com/sportytell.com/wp-content/uploads/2018/11/Ronaldo-Champions-league-Manchester-United.jpg?zoom=1.25&w=680&ssl=1", "./img2.jpg", "./img4.jpg", "./kavara.jpg", "./messi.jpg"]
let color = ["blue", "yellow", "red", "orange", "pink"]

let img1 = document.getElementById("img1")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let h1 = document.getElementById("h1")

let index = 0

btn1.addEventListener("click", () => {
    index ++
    if(index >= images.length){
        index = 0
    }
    img1.src = images[index]
    document.body.style.background = color[index]
})

btn2.addEventListener("click", () => {
    index --
    if(index < 0){
        index = images.length - 1
    }
    img1.src = images[index]
    img1.style.borderColor = color[index]
    h1.style.fontSize = "15px"
})