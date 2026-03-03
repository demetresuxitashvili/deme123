// 1) შექმენით person ობიექტი, დაამატეთ მასში ოთხი key: firstName, lastName, age, height, შემდეგ წაშალეთ age, height შეცვალეთ და საბოლოოდ დაპრინტეთ ობიექტი

const person = {
    firstName: "deme",
    lastName: "sukhitashvili",
    age: 10,
    height: "agar maxsovs"
}

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.height)

person.firstName = "w deme"
person.lastName = "sukhita"
person.age = 11
person.height = "3 metra"

console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.height)

// 2) შექმენით phone ობიექტი, რომელსაც ექნება brand, model, price property-ები, შექმენით ობიექტის მეთოდი რომელსაც გადაეცემა რამე რიცხვი და ამ რიცხვს დაუმატებს price-ს, გამოიტანეთ განახლებული price კონსოლში
const phone = {
    brand: "sigma",
    model: "cf113",
    price: 149,
    
    price_property: function(amaount){
        this.price += amaount
    }
}

console.log(phone)
phone.price_property(9999999999999999999999999999999999999999)
console.log(phone)