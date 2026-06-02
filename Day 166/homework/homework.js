// 1) შექმენი ორი Promise  (ერთმა დაარესოლვოს, ერთმა დაარეჯექთოს) და ორივე შემთხვევა დაამუშავე then/catch-ით  ცალცალკეც და “ჯგუფურადაც”  - ჯგუფურად დამუშავებისთვის Allsetteld გამოიყენე.
// let promise1 = new Promise((res, rej) => {res("correct")})
// let promise2 = new Promise((res, rej) => {rej("incorrect")})

// promise1
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// promise2
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// Promise.allSettled([promise1, promise2])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//     })

// 2) შექმენი 4 პრომისი, თითოეული ჩასვი setTimeOut-ში და  დააბრუნე მათგან რომელი გაეშვება ყველაზე სწრაფად.
// let myPromise1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("p1 is correct")
//     }, 1000)
// })

// let myPromise2 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("p2 is correct")
//     }, 100)
// })

// let myPromise3 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("p3 is incorrect")
//     }, 10)
// })

// let myPromise4 = new Promise((res, rej) => {
//     setTimeout(() => {
//         res("p4 is correct")
//     }, 0)
// })

// Promise.any([myPromise1, myPromise2, myPromise3, myPromise4])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.error(err)
//     })

// 3)შექმენი 4 ფრომისი  და reduce-ით დაითვალე რამდენია წარმატებული და რამდენი წარუმატებელი.
// ვერ გავიგე

// 4) შექმენი 5 Promise და გაფილტრე ეს ფრომისები დააბრუნე  მხოლოდ წარმატებულები (resolved/fulfilled)
let myPromise1 = new Promise((resolve, reject) => {reject("p1: failed")})
let myPromise2 = new Promise((resolve, reject) => {resolve("p2: correct")})
let myPromise3 = new Promise((resolve, reject) => {resolve("p3: correct")})
let myPromise4 = new Promise((resolve, reject) => {reject("p4: failed")})
let myPromise5 = new Promise((resolve, reject) => {resolve("p5: correct")})

Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4, myPromise5])
    .then((data) => {
        for(let i = 0; i < data.length; i ++){
            if(data[i].status === "fulfilled"){
                console.log(data[i])
            }
        }
    })