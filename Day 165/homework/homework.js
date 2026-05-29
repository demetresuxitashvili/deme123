// 1) კომენტარების სახით დეტალურად ახსენით რა არის და რისთვის გამოიყენება promise - ები (თავისი მდგომარეობებით, .then, .catch და .finally მეთოდებიც).
// .then გვეხმარება დაპირება რომ შესრულდება გამოვიტანოთ კონსოლი ან ნებისმიერი რამ, .catch მეშვეობით ვიჭერთ შეცდომას და გამოგვაქვს კონსოლი ან ნებისმიერი რამ, .finally გვეხმარება რომ ყველა ოპერაციის დასრულები შემდეგ გამოვიტანოთ კონსოლი ან ნებისმიერი რამ.

// 2) კომენტარების სახით ახსენით რას აკეთებს და რისთვის გამოიყენება Promise.all მეთოდი.
// Promise.all გვეხმარება მივწვდეთ ყველა promise-ს და გავაკეთოთ მათზე ოპერაციები როგორიცა .then, .catch და .finally.

// 3) შექმენით ფუნქცია getProduct რომელსაც გადაეცემა success არგუმენტი, შემდგომ ამ ფუნქციამ უნდა დააბრუნოს Promise - ი და მის შიგნით შეამოწმეთ success - ის მნიშვნელობა, თუ მისი მნიშვნელობა არის true - დაუბრუნეთ resolve ფუნქციით პროდუქტის ობიექტი (title, description, price, stock), ყველა სხვა შემთხვევაში - reject - ით დააბრუნეთ ერორის ობიექტი (status, message). (გატესტეთ ამ ფუნქციის ორივე შემთხვევა)
// 1
// let success = true

// function user(){
//     return new Promise((resolve, reject) => {
//         if(success){
//             resolve({
//                 title: "arvici ra davwero",
//                 description: "arvici ra davwero",
//                 price: "arvici ra davwero",
//                 stock: "arvici ra davwero",
//             })
//         }
//         else{
//             reject({
//                 status: "user failed",
//                 message: "user not found"
//             })
//         }
//     })
// }

// user()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("bye bye")
//     })

// // 2
// let success = false

// function user(){
//     return new Promise((resolve, reject) => {
//         if(success){
//             resolve({
//                 title: "arvici ra davwero",
//                 description: "arvici ra davwero",
//                 price: "arvici ra davwero",
//                 stock: "arvici ra davwero",
//             })
//         }
//         else{
//             reject({
//                 status: "user failed",
//                 message: "user not found"
//             })
//         }
//     })
// }

// user()
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("bye bye")
//     })

// 4) შექმენით მინიმუმ 5 promise - ი და Promise.all - ის მეშვეობით დაამუშავეთ ყველა მათგანი ერთდროულად და გამოიტანეთ შედეგები ტერმინალში.
// let success = true

// let myPromise1 = new Promise((resolve, reject) => {
//     if(success){
//         resolve("promise1 is succesfully")
//     }
//     else{
//         reject("error")
//     }
// })

// let myPromise2 = new Promise((resolve, reject) => {
//     if(success){
//         resolve("promise2 is succesfully")
//     }
//     else{
//         reject("error")
//     }
// })

// let myPromise3 = new Promise((resolve, reject) => {
//     if(success){
//         resolve("promise3 is succesfully")
//     }
//     else{
//         reject("error")
//     }
// })

// let myPromise4 = new Promise((resolve, reject) => {
//     if(success){
//         resolve("promise4 is succesfully")
//     }
//     else{
//         reject("error")
//     }
// })

// let myPromise5 = new Promise((resolve, reject) => {
//     if(success){
//         resolve("promise5 is succesfully")
//     }
//     else{
//         reject("error")
//     }
// })

// let allPromise = [myPromise1, myPromise2, myPromise3, myPromise4, myPromise5]

// Promise.all(allPromise)
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log("bye bye")
//     })