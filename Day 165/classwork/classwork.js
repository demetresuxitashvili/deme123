// 1) შექმენით თქვენი ხელოვნური Promise და გადაეცით callback ფუნქცია resolve და reject პარამეტრით, ფუნქციის შიგნით გამოიყენეთ setTimeout - ი იმისთვის რომ შეაყოვნოთ კოდი, ასევე შექმენით success ცვლადი რისი დახმარებითაც თქვენ მიიღებთ გადაწყვეტილებას რომელი სიტუაცია გაუშვათ resolve თუ reject, შემდგომ ფუნქციის გარეთ დაელოდეთ promise - ის შესრულებას .then და .catch ფუნქციის დახმარებით
let success = true

let promaisi = new Promise((resolve, rejecet) => {
    setTimeout(() => {
        if(success){
            resolve("succesfully")
        }
        else{
            rejecet("error")
        }
    }, 2000)
})

promaisi
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })