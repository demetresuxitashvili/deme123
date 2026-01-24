// 1) • ჩამოწერეთ მნიშვნელობები, რომლებიც Truthy მნიშვნელობას ეკუთვნის.
//    • ჩამოწერეთ მნიშვნელობები, რომლებიც Falsey მნიშვნელობას ეკუთვნის.
// Truthy - აბრუნებს თუ რიცხვი არის 0-ზე მეტი და სტრინგში რამე თუ წერია რამე სიტყვა, Falsey - აბრუნებს როცა რიცხვი 0-ია და სტრინგი ცარიელია

// 2) მომხმარებელს prompt()-ის გამოყენებით შემოატანინეთ ინფორმაცია არის თუ არა ადმინი. თუ მომხმარებელი შემოიტანს 'yes' მაშინ isAdmin ცვლადში შეინახეთ true, თუ შემოიტანს 'no', მაშინ isAdmin ცვლადში შეინახეთ false. გამოიყენეთ Ternary operator-ი.
let cvladi = prompt("you are admin? ")
let isAdmin

cvladi === 'yes' ? isAdmin = true : isAdmin = false

console.log(cvladi)

// 3) გამოიყენეთ წინა დავალება და || ოპერატორი, რომ განაგრძოთ პროგრამა:
// შექმენით greetMsg ცვლადი.
// თუ isAdmin ცვლადში შენახულია true მნიშვნელობა მაშინ greetMsg გაუტოლეთ 'Admin'-ს, ხოლო თუ მისი მნიშვნელობა false-ია greetMsg ცვლადში 'user' შეინახეთ.

// საბოლოოდ კონსოლში დაბეჭდეთ 'Hello, {greetMsg}`. გამოიყენეთ String Literal.

let greetMsg = isAdmin || 'user'

isAdmin === true ? greetMsg = 'admin' : console.log(greetMsg)

console.log(`hello, ${greetMsg}`)