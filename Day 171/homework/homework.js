// 1) დეტალურად ახსენით შემდეგი ექსპორტის გზები: export, export default და module.exports.
// export-ით ზოგადად გვეხმარება ფაილის დაექსპორტებაში რის მეშვეობით მეორე ფაილიდან იმპორტით გადმოვიტანთ დაექსპორტებულ ფუნქცია ან რამეს ზოგადად არსებობს ორი ტიპის დაექსპორტება export default და module.exports. export default-ის მეშვეობით ვაექსპორტებთ მხოლოდ 1 ფუნქციას ან ნებისმიერ რამეს ხოლო module.exports-ის მეშვეობით მრავალ ფუნქციას დავაექსპორტებთ ოღონდ აუცილებლად ობიექტის ფრჩხილებში უნდა ეწეროს

// 2) დეტალურად ახსენით შემდეგი იმპორტები: import და require.
// imprt-ის საშვალებით შეგვიძლია გადმოვიტანოთ დაექსპორტებული ფუნქცია ან ნებისმიერი რამ სხვა ფაილიდან და require-ში უბრალოდ ვუთითებთ რომელი ფაილიდან უნდა გადმოვიტანოთ

// 3) შექმენით utils.js ფაილი და app.js ფაილი, შემდგომ utils ფაილში შექმენით 2 ფუნქცია getProducts და getUsers, მათი დავალება იქნება, რომ წამოიღონ პროდუქტები და user - ები.
// APIs:
// products - https://fakestoreapi.com/products
// users - 'https://fakestoreapi.com/users
// შემდგომ ეს ფუნქციები გაიტანეთ ფაილის გარეთ ან export - ით ან module.exports - ით და დააიმპორტეთ app.js  ფაილში ან import - ით ან require - თი (დამოკიდებულია იმაზე, თუ რომელი ექსპორტის გზას გამოიყენებთ) და შესაბამისად გამოიყენეთ ეს 2 ფუნქცია app.js ფაილში
async function productAPI() {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    console.log(data)
}

async function userAPI() {
    let res = await fetch("https://fakestoreapi.com/users")
    let data = await res.json()
    console.log(data)
}

module.exports = {productAPI, userAPI}