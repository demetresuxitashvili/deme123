// 2) შექმენით ფუნქცია, რომელიც მიიღებს მომხმარებლის ასაკს.
// თუ ასაკი არის 18 ან მეტი, დაბეჭდოს ტექსტი: "You're an adult"
// სხვა შემთხვევაში დაბეჭდოს ტექსტი: "You are not an adult"
function filter_age(num){
    if( num >= 18){
        return "You're an adult"
    }
    else{
        return "You are not adult"
    }
}

console.log(filter_age(11)) // You are not adult
console.log(filter_age(19)) // You're an adult

// 3) შექმენით ფუნქცია, რომელიც მიიღებს ტექსტს და დააბრუნებს ამ ტექსტში არსებული ასოების რაოდენობას.
function len_arr(name){
    return name.length
}

console.log(len_arr("deme"))

// 4) შექმენით ფუნქცია, რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს ყველა ელემენტის ჯამს.
function sum_arr(num){
    let sum = 0
    for(let i = 0; i < num.length; i ++){
        sum += num[i]
    }
    return sum
}

console.log(sum_arr([1, 2, 4, 1, 3, 2])) // 13

// 5) შექმენით ფუნქცია, რომელიც დააბრუნებს რიცხვის კვადრატს.
function square(num1, num2){
    return num1 ** num2
}

console.log(square(2, 3))

// 6) შექმენით ფუნქცია და გადაეცით მას სამი არგუმენტი. პასუხად დააბრუნეთ პირველი რიცხვი აყვანილი მეორეს ხარისხში და გამრავლებული მესამე რიცხვზე. ფუნქციას გაუწერეთ Default პარამეტრები.
function greet2(num1 = 10, num2 = 10, num3 = 10){
    return (num1 ** num2) * num3
}

console.log(greet2(2, 3, 3))

// 7) ახსენით თუ რა განსხვავებაა return keyword-სა და console.log-ს შორის. მოიყვანეთ მინიმუმ 2-2 მაგალითი.

// მოცემულ ყველა დავალებაში გამოიყენეთ return. ასევე, სიმარტივისთვის ყველა ფუნქცია ჯერ პითონში დაწერეთ (რათა ლოგიკას მიხვდეთ), შემდეგ კი Javascript-ში.

// ის განსხვავებაა რომ console.log() - ს გამოაქ და return აბრუნებს მნიშვნელობას მაგალითად გვაქვს აი ასეთი კოდი
// function greet(name){
//     console.log("deme")
// }

// console.log(greet("deme"))
// აი ასე შეცდომა დაბეჭდავს undefaind რადგან ჩვენ უკვე გამოგვაქვს კოდი ფუნქციაში და როცა ფუნქციას კონსოლოგით ვწერთ მეორე ცონსოლი აღარ უნდა მაშინ სწორე იქნება ესე 
// function greet(name){
//     console.log("deme")
// }

// greet("deme") 
// ასე გამოიტანს deme-ს
// ხოლო ასე უკუთესია მარა ზოგადად თუ გვინდა რომ კოდი სუფთათ გავუშვათ  return - უნდა აი return ესეთი იქნება

// function greet(name){
//     return "deme"
// }

// console.log(greet("deme"))
// ასე უკვე გამოიტანს deme-ს