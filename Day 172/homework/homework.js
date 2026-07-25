// 0) მოიძიეთ და დაიზეპირეთ HTTP status კოდები.
// მოვიძიე

// გადაიმეორეთ გავლილი მასალა პრაქტიკული დავალებებით:
// ვიმეორებ

// 1) დაწერე ფუნქცია რომელიც გაფილტრავს ლუწებს და იპოვი მათ საშუალოს [1,2,3,4,5,6]
// let nums = [1, 2, 3, 4, 5, 6]
// let filteredNums = nums.filter(x => x % 2 === 0)
// let array = filteredNums.reduce((acc, acrval) => {
//     return acc += acrval
// }, 0)

// console.log(array / filteredNums.length)

// 2) დაწერე ფუნქცია, რომელიც დაითვლის სიტყვების რაოდენობას წინადადებაში.
// let = "I love JavaScript"

// let ilj = "I love JavaScript"

// console.log(ilj.split(" ").length)

// 3) დაწერე ფუნქიცა რომელიც დააბრუნებს true თუ რიცხვი მარტივია თუ არადა false.
// function easyFunc(easy){
//     let count = 0
//     for(let i = 0; i < easy + 1; i ++){
//         if(easy % i === 0){
//             count ++
//         }
//     }
//     count === 2 ? console.log(true) : console.log(false)
// }

// easyFunc(3)

// 4) let words = ["dog", "elephant", "cat", "hippopotamus"] იპოვე ყველაზე გრძელი ისტყვა.

// function getwords(...words){
//     let count = '';
//     for(let i = 0; i < words.length; i++){
//         if(count.length < words[i].length){
//             count = words[i]
//         }
//     }
//     console.log(count)
// }

// getwords("dog", "elephant", "cat", "hippopotamus")

// 5) let arr = [3, 5, 3, 2, 5, 5, 3, 5] დააბრუნე ისეთი რიცხვი რომელიც მეორდება ყველაზე ბევრჯერ.
// let arr = [3, 5, 3, 2, 5, 5, 3, 5]

// function filter_arr(num){
    // num = num.sort((a, b) => a - b)
    // for(let i = 0; i < num.length; i ++){
        // if(num[i] === num[i+1]){
            // console.log(num[i])
        // }
    // }
// }

// filter_arr(arr)

// 6) let nums = [1, 2, 3, 4, 5, 6, 7, 8] დაწერე ფუნქცია რომელიც დაითვლის რამდენი ლუწი და რამდენი კენტი რიცხვია
// function filter_nums(...num){
    // let odd = num.filter(x => x % 2 !== 0)
    // let even = num.filter(y => y % 2 === 0)
    // console.log(`odds are ${odd} and evens are ${even}`)
// }

// filter_nums(1, 2, 3, 4, 5, 6, 7, 8)

// 7) let nums = [10, 2, 33, 5, 7] დაწერე ფუნქცია როემლიც დააბრუენბს ყველაზე პატარა რიცხვს
// function sortedNums(...num){
//     let lstn = num.sort((a, b) => a - b)
//     console.log(lstn[0])
// }

// sortedNums(10, 2, 33, 5, 7)