// 1) შექმენით products.json, რომელშიც პროდუქტების სიას ჩაწერთ. წაიკითხეთ ეს ფაილი, ამოიღეთ ინფორმაცია და ახალ updated.json-ში ჩაწერეთ, მხოლოდ ის პროდუქტები, რომელთა ფასი 5 $-ზე ნაკლებია.
let fs = require("fs/promises")
const { parse } = require("path")

let products = [
    {
        name: "Apple",
        price: 5,
        cuantity: 30
    },
    {
        name: "Bread",
        price: 2,
        cuantity: 15
    },
    {
        name: "Pinaple",
        price: 7,
        cuantity: 3
    },
    {
        name: "strawberry",
        price: 5,
        cuantity: 50
    },
    {
        name: "grape",
        price: 8,
        cuantity: 10
    }
]

async function main() {
    await fs.writeFile("products.json", JSON.stringify(products))
    let readText1 = await fs.readFile("products.json", "utf-8")
    let parsedText = JSON.parse(readText1)
    let filteredProduct = parsedText.filter(str => str.price <= 5)
    await fs.writeFile("updated.json", JSON.stringify(filteredProduct))
    let readText2 = await fs.readFile("updated.json", "utf8")
    console.log(readText2)
}

main()