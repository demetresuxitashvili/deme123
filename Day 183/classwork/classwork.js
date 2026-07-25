// 1) შექმენი მომხმარებლების მასივი შემდეგი თვისებებით: name, age, email — შემდეგ ეს მონაცემები ჩაწერე data.json ფაილში
let fs = require("fs/promises")

// let user = [
//     {
//         name: "deme",
//         age: "11",
//         email: "deme1234@gmail.com"
//     },
//     {
//         name: "nika",
//         age: "22",
//         email: "nika23@gmail.com"
//     },
//     {
//         name: "luka",
//         age: 17,
//         email: "luk12a3@gmail.com"
//     }
// ]

// async function main() {
//     await fs.writeFile("data.json", JSON.stringify(user))
//     let readText = await fs.readFile("data.json", "utf-8")
//     let parsedText = JSON.parse(readText)
//     console.log(parsedText)
// }

// main()

// 2) წაიკითხე მომხმარებლების JSON მონაცემები, გაფილტრე ისინი (ის ვინც 18 წელზე უფროსია) და თავიდან ჩაწერე
// let user = [
//     {
//         name: "deme",
//         age: 19,
//     },
//     {
//         name: "andria",
//         age: 9
//     },
//     {
//         name: "nika",
//         age: 12
//     }
// ]

// async function main() {
//     await fs.writeFile("data.json", JSON.stringify(user))
//     let readText = await fs.readFile("data.json", "utf-8")
//     let parsedText1 = JSON.parse(readText)
//     let filteredText = parsedText1.filter(str => str.age >= 18)
//     await fs.writeFile("data.json", JSON.stringify(filteredText))
//     let readText2 = await fs.readFile("data.json", "utf8")
//     console.log(readText2)
// }

// main()