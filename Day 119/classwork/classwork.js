// 1) შექმენით ფუნქცია Sum, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ ჯამს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.
function Sum(num1 = 10, num2 = 10){
    return num1 += num2
}

console.log(Sum(5, 5))

// 2) შექმენით ფუნქცია Substract, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ სხვაობას. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.
function Substract(num1 = 10, num2 = 10){
    return num1 -= num2
}

// 3) შექმენით ფუნქცია Multiply, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ ნამრავლს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.
function Multiply(num1 = 5, num2 = 5){
    return num1 * num2
}

// 4) შექმენით ფუნქცია Divide, რომელიც არგუმენტად მიიღებს ორ რიცხვს და დააბრუნებს მათ განაყოფს. ფუნქციას გაუწერეთ Default არგუმენტები. პასუხი დააბრუნეთ return-ით.
function Divide(num1 = 10, num2 = 2){
    return num1 / num2
}

// 5) შექმენით ფუნქცია, რომელიც მიიღებს ერთ რიცხვს და შეამოწმებს, არის თუ არა ის კენტი თუ ლუწი,შედეგი დაბეჭდეთ ეკრანზე
function Odd_Even(num = 2){
    if(num % 2 == 0){
        return `${num} this number is Odd`
    }
    else{
        return `${num} this number is Even`
    }
}