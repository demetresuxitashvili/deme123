// 1) შექენი 4 Promise (ზოგი resolve, ზოგი reject). დააბრუნე მარტო პირველი დარესოლვებული
// let myPromise1 = new Promise((resolve, reject) => {resolve("p1: correct")})
// let myPromise2 = new Promise((resolve, reject) => {resolve("p2: correct")})
// let myPromise3 = new Promise((resolve, reject) => {reject("p3: failed")})
// let myPromise4 = new Promise((resolve, reject) => {resolve("p4: correct")})

// Promise.any([myPromise1, myPromise2, myPromise3, myPromise4])
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.error(err);
//     })

// 2) შექმენი 5 Promise და გაფილტრე ეს ფრომისები დააბრუნე  მხოლოდ წარუმატებლები (rejected). (მინიშნება: გამოგადგებათ filter() )
// let myPromise1 = new Promise((resolve, reject) => {reject("p1: failed")})
// let myPromise2 = new Promise((resolve, reject) => {resolve("p2: correct")})
// let myPromise3 = new Promise((resolve, reject) => {resolve("p3: correct")})
// let myPromise4 = new Promise((resolve, reject) => {reject("p4: failed")})
// let myPromise5 = new Promise((resolve, reject) => {resolve("p5: correct")})

// Promise.allSettled([myPromise1, myPromise2, myPromise3, myPromise4, myPromise5])
//     .then((data) => {
//         for(let i = 0; i < data.length; i ++){
//             if(data[i].status === "fulfilled"){
//                 console.log(data[i])
//             }
//         }
//     })