// 1) კომენტარის სახით დაწერეთ რა განსხვავებაა Arrow (Anonymous) ფუნქციებსა და function keyword ფუნქციებს შორის.
// შეგიძლია ცვლადში შეინახო და შეგიძლია return არ დაწერო და სინტაქსია განსხვავებული იწერება function გარეშე და მერე =>-ით 

// 2) შექმენით arrow function სახელით rectangleArea, რომელიც პარამეტრად მიიღებს width, height-ს. გამოთვალეთ მართკუთხედის ფართობი.
const rectangeleArea = (width, height) => width * height

console.log(rectangeleArea(2, 5))

// 3) შექმენით arrow function triangleArea, რომელიც პარამეტრად მიიღებს side1, side2, side3 პარამეტრებს. გამოთვალეთ სამკუთხედის პერიმეტრი.
const triangleArea = (side1, side2, side3) => side1 + side2 + side3

console.log(triangleArea(2, 2, 2))