// შექმენით image slider 5 ფოტოს გამოყენებით. ფოტოები უნდა იყოს თქვენი საყვარელი ფილმის კადრებიდან.
// დაამატეთ previous და next ღილაკები. ყველა ელემენტი გასტილეთ css-ით და მაქსიმალურად დახვეწეთ.
const images = [
    "https://reginfo.ge/media/k2/items/cache/4e14070111603080f77b24d09faede11_XL.jpg?t=1559296824",
    "./images/img1.jgp",
    "./images/img2.jgp",
    "./images/img3.avif",
    "./images/img4.jgp"
]

let img = document.getElementById("img")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")

let index = 0

b2.addEventListener("click", () => {
    index ++
    if(index >= images.length){
        index = 0
    }
    img.src = images[index]
})

b1.addEventListener("click", () => {
    index --
    if(index < 0){
        index = images.length - 1 
    }
    img.src = images[index]
})