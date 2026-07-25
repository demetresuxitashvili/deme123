// 1) დაასრულეთ 183-ე Level-ის დავალებები
// დავასრულე

// 2) ჩაწერე ფაილში ტექსტი, შემდეგ წაიკითხე ეს მონაცემები და დათვალე რამდენი სიტყვაა.
let fs = require("fs/promises")

// async function main() {
//     await fs.writeFile("data.json", JSON.stringify("deme"))
//     let readText = await fs.readFile("data.json", "utf-8")
//     let textLength = readText.length
//     console.log(textLength)
// }

// main()

// 3) შექმენი სტუდენტების მასივი (name, score, passed), ჩაწერე students.json-ში.
// შემდეგ წაიკითხე და გაფილტრე ისინი, ვისი score 50-ზე მეტია, და ჩაწერე ახალ passed.json - ში.
// let students = [
//     {
//         name: "deme",
//         score: 100,
//         passed: "yes"
//     },
//     {
//         name: "gega",
//         score: 80,
//         passed: "yes"
//     },
//     {
//         name: "random person",
//         score: 20,
//         passed: "no"
//     }
// ]

// async function main() {
//     await fs.writeFile("students.json", JSON.stringify(students))
//     let readText1 = await fs.readFile("students.json", "utf-8")
//     let parsedText = JSON.parse(readText1)
//     let filteredText = parsedText.filter(str => str.score >= 50)
//     await fs.writeFile("passed.json", JSON.stringify(filteredText))
//     let readText2 = await fs.readFile("passed.json", "utf-8")
//     console.log(readText2)
// }

// main()

// 4) წაიკითხე "users.json", და წაშალე ყველა, ვისაც არ აქვს "@" ელფოსტაში. განაახლე users.json.
// [
//   { "name": "Gio", "email": "gio@gmail.com" },
//   { "name": "Nika", "email": "nikaexample.com" },
//   { "name": "Mariam", "email": "mariam@gmail.ge" },
//   { "name": "Lasha", "email": "lashagmail.ge" },
//   { "name": "Ana", "email": "ana@gmail.com" }
// ]

// let user = [
//     {
//         "name": "Gio", "email": "gio@gmail.com" 
//     },
//     { 
//         "name": "Nika", "email": "nikaexample.com" 
//     },
//     { 
//         "name": "Mariam", "email": "mariam@gmail.ge" 
//     },
//     { 
//         "name": "Lasha", "email": "lashagmail.ge" 
//     },
//     { 
//         "name": "Ana", "email": "ana@gmail.com" 
//     }
// ]

// async function main() {
//     await fs.writeFile("users.json", JSON.stringify(user))
//     let readText1 = await fs.readFile("users.json", "utf-8")
//     let parsedText = JSON.parse(readText1)
//     let filteredText
// }