// 1) წაიკითხე მონაცემები ორ სხვადასხვა ფაილიდან და ჩაწერე ერთ ფაილში.
let fs = require("fs/promises")

// async function main() {
//     await fs.writeFile("first.txt", "demetre")
//     await fs.writeFile("second.txt", "sukhitashvili")
//     let readText1 = await fs.readFile("first.txt", "utf-8")
//     let readText2 = await fs.readFile("second.txt", "utf-8")
//     let combined = `${readText1} ${readText2}`
//     await fs.writeFile("third.txt", combined)
//     let readText3 = await fs.readFile("third.txt", "utf-8")
//     console.log(readText3)
// }

// main()

// 2) შექმენით ტექსტური ფაილი input.txt, სადაც ჩაწერილი იქნება რამდენიმე სტრინგი. დაწერეთ პროგრამა, რომელიც წაიკითხავს ამ ფაილს, ამოირჩევს მხოლოდ იმ სტრინგებს, რომლებიც იწყება ასო "A"-თი და მათ ჩაწერს ახალ ფაილში - filtered.txt.
// async function main() {
//     await fs.writeFile("input.txt", "Group GOA Apple Atom")
//     let readText1 = await fs.readFile("input.txt", "utf-8")
//     let splitedText = readText1.split(" ")
//     let filteredA = splitedText.filter(str => str[0] === "A")
//     let joinedText = filteredA.join(", ")
//     await fs.writeFile("filtered.txt", joinedText)
//     let readText2 = await fs.readFile("filtered.txt", "utf-8")
//     console.log(readText2)
// }

// main()

// 3) მოცემულია ტექსტური ფაილი story.txt, რომელშიც წერია რაიმე დიდი ტექსტი. დაწერეთ პროგრამა, რომელიც წაიკითხავს ამ ფაილს, იპოვის მასში არსებულ ყველაზე გრძელ სიტყვას  და დაბეჭდავს მას ეკრანზე (ასევე დაბეჭდეთ ამ სტრინგის სიგრძეც).
// async function main() {
//     await fs.writeFile('story.txt', 'Hello world I am deme')
//     let read1 = (await fs.readFile('story.txt', 'utf-8')).split(' ');
//     console.log(read1)
//     let res = ''
//     for(let i = 0; i < read1.length; i++){
//         if(read1[i].length > res.length){
//             res = read1[i]
//         }
//     }
//     await console.log(res)
//     await console.log(res.length)
// }

// main()

// 4) დაწერეთ პროგრამა, რომელიც მომხმარებელს სთხოვს შეიყვანოს ორი სტრინგი: "ძველი სიტყვა" და "ახალი სიტყვა". პროგრამამ უნდა გახსნას ფაილი text.txt, მოძებნოს მასში ძველი სტრინგის ყველა შემთხვევა, შეცვალოს ისინი ახალი სტრინგით და მიღებული შედეგი გადააწეროს იმავე ფაილს (ან შეინახოს ახალ ფაილში).

// async function main() {
//     await fs.writeFile('text.txt', ['Apple ', 'Banana ', 'Orange'])
//     let old = 'Orange';
//     let neww = 'Clocolate';
//     let read3 = (await fs.readFile('text.txt', 'utf-8')).split(' ');
//     for(let i = 0; i < read3.length; i++){
//         if(read3[i] === old){
//             read3[i] = neww
//         }
//     }
//     await console.log(read3)
// }
// main()

// 5) მოცემულია ტექსტური ფაილი lines.txt, სადაც წერია რამდენიმე ტექსტური ხაზი. დაწერეთ პროგრამა, რომელიც წაიკითხავს ამ ფაილს და ჩაწერს ახალ ფაილში reversed.txt არსებულ სტრინგებს შებრუნებული თანმიმდევრობით (ანუ ორიგინალი ფაილის ბოლო სტრინგი უნდა გახდეს ახალი ფაილის პირველი სტრინგი).
// async function main() {
//     await fs.writeFile('lines.txt', 'Hello My name is demetre')
//     let read3 = (await fs.readFile('lines.txt', 'utf-8')).split(' ').reverse();
//     await console.log(read3.join(' '))
//     await fs.writeFile('reversed.txt', read3.join(' '))
// }
// main()