// 3) დააყენეთ Node.js
// დავაყენე

// 4) შექმენით myNum ცვლადი და დღეს ნასწავლი მათემატიკური ოპერატორების გამოყენებით განაახლეთ მისი მნიშვნელობები შემდეგნაირად:
// • დაუმატეთ 70
// • გამოაკელით 99
// • გაამრავლეთ 100-ზე
// • ბოლოს კი გაყავით 12-ზე
// საბოლოო პასუხი გამოიტანეთ კონსოლში
let myNum = 67;
console.log(myNum += 70);
console.log(myNum -=  99);
console.log(myNum *= 100);
console.log(myNum /= 12);
console.log(myNum ++);
console.log(myNum --);

// 5) ახსენით თუ რა დანიშნულება აქვს Increment/Decrement ოპერატორებს.
// increment - ++ ზდის, decerment - -- აპატარავებს

// 6) რას გამოიტანს ეს კოდები?
// let x = 5;
// x++;
// x --;
// x++;
// console.log(x);

// ეს გამოიტანს 6-ს რადგან ++ ხდება 6 -- 5 და ისევ ++ 6

// let n = 1;
// n --;
// n++;
// n --;
// n++;
// console.log(n);

// ეს გამოიტანს 1 რადგან -- ხდება 0 ++ ისევ 1 -- 0 და ბოლოს ++ 1

// 7) 5 სხვადასხვა ცვლადში შეინახეთ მონაცემები თქვენი თავის შესახებ. გამოიყენეთ Template literal იმისათვის, რომ კონსოლში ერთი დიდი წინადადება დაბეჭდოთ.
const myName = 'demetre';
const meAge = 10;
const mySureName = 'sukhitashvili'
const myBirthYear = 2015;
const vinVarMe = 'me var jupiter';
console.log(`my name is ${myName} my age is ${meAge} me sure name is ${mySureName} me bithday year is ${myBirthYear} and who are me, me are ${vinVarMe}`);

// 8) ახსენით Template literal-ის სინტაქსი და ჩამოწერეთ თუ რა მსგავსებები/განსხვავებები აქვს პითონის f string-თან შედარებით. 
// template literal - იგივე f სტრინგი მაგრამ ეს არის js-ში ის იწერება f-ს მაგივრად აი ამ სიმბოლოთი ---> `` და მანდ ვწერთ როგორც სტრინგი ისე ყველაფერს და თუ გვინდა ცვლადის გამოტანა ან მონაცემის ვწერთ ამ სიმბოლოს ${} და შიგნით ვწერთ ცვლადის სახელს 

// 9) 4 ცვლადში შეინახეთ შემდეგი მონაცემები:
// • 'Group 71'
// • 80
// • true
// • 4.8

// კონსოლში დაბეჭდეთ თითოეული ცვლადის მონაცემის ტიპი.

let meGoaGroup = 'Group 71';
let numbern = 80;
let booln = true;
let nam = 4.8;
console.log(meGoaGroup, numbern, booln, nam);