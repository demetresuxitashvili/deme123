// შექმენით div-ი რომლის სიგრძე და სიგანე იქნება  200px ლი;; setinterval ის დახმარებით ყოველ 1 წამში დივი მარცხნიდან მარჯვისკენ უნდა მოძრაობდეს  თავდაპირველად margin-left  ი უნდა იყოს 0px და როდესაც margin-left მიაღწევს 1000 px ლს დააბრუნეთ დივი საწყის პოზიციაზე. დივი არ უნდა გაჩერდეს
// let box = document.getElementById("box")

// let count = 0

// let interval = setInterval(() => {
//     count += 2
//     box.style.marginLeft = `${count}px`
//     if(count === 1000){
//         count = 0
//     }
// }, 1)

let img = document.getElementById("img")

let images = [
    "./hehe1.png",
    "./hehe2.png",
    "./hehe3.png",
    "./hehe4.png",
    "./hehe5.png"
]

let index = 0

let interval = setInterval(() => {
    if(index === 4){
        index = 0
    }
    index ++
    img.src = images[index]
}, 500) 