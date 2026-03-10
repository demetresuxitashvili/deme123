// 2) ახსენით რას ეწოდება DOM? რას ეწოდება Rendering?
// DOM არის document object model და თითოეულ დომის ელემენტს node-ს ეძახიან

// 3) html დოკუმენტში დაამატეთ პარაგრაფი, ფოტო და ღილაკი. სამივე წამოიღეთ js-ში getElementById-ის მეშვეობით და კონსოლში გამოიტანეთ თითოეული ობიქეტის მონაცემები.
const get_p = document.getElementById("p1")

console.log(get_p)

const get_img = document.getElementById("img1")

console.log(get_img)

const get_b = document.getElementById("b1")

console.log(get_b)

// 3) html დოკუმენტში დაამატეთ სამი heading: h1, h2, h3. სამივე წამოიღეთ js-ში getElementsByClassName-ის მეშვეობით და მოიძიეთ ინფორმაცია თუ როგორაა შესაძლებელი ამ ელემენტებისთვის ფერის შეცვლა js-დან. გამოიტანეთ სამივე ობიექტის მონაცემები და იპოვეთ parentNode-ი.
const get_h1 = document.getElementsByClassName("h1")

console.log(get_h1)
