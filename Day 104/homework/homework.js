// 2) console-ში დაბეჭდეთ true ან false ამ მნიშვნელობებზე დაფუძნებით. (გამოიყენეთ Boolean ფუნქცია)
// 0 false
// '' false
// 'Hello' true
// null false
// undefined false
// [] false
// {} false
// '0' false
// NaN false
// false false

const { StrictMode } = require("react");

// 3) age ცვლადში შეინახეთ prompt-ის საშუალებით შემოტანილი მომხმარებლის ასაკი. გამოიყენეთ Ternary Operator, რომ დაბეჭდოთ:
// 'Adult' თუ მოხმარებლის ასაკი 18 წელზე მეტია, 'teen' თუ 13-დან 17-ის ჩათვლითაა, ხოლო 'child' ყველა სხვა შემთხვევაში.

let age = 11;

age > 18 ? console.log('Adult') : 13 < age && age < 17 ? console.log('Teen') : console.log('Child');

// 4) შეამოწმეთ რიცხვი ლუწია თუ კენტი Ternary Operator-ით. დააბრუნეთ 'Even'/'Odd'
let nmb = 8;

nmb % 2 == 0 ? console.log('even') : console.log('odd');

// 5) შექმენით isLoggedIn ცვლადი. მომხმარებელს შემოატანინეთ ინფორმაცია არის თუ არა შესული სისტემაში. თუ პასუხი 'yes' არის - ტერნარის მეშვეობით isLoggedIn  ცვლადში შეინახეთ true, სხვა შემთხვევაში false. გამოიყენეთ string literal, რომ კონსოლში დაბეჭდოთ წინადადება:
// 'Is the user logged in? true/false.'
let True_False = prompt("are you logged?: yes or no? ");
let isLoggedIn;

True_False === 'yes' ? isLoggedIn = true : isLoggedIn = false;

console.log(isLoggedIn);

// 6) მოცემულია:

const a = 298;
const b = 330;
// ternary operator-ით დაბეჭდე "a is bigger", "b is bigger" ან "equal".
a > b ? console.log('a is bigger') : b > a ? console.log('b is bigger') : console.log('equal');


// 7) შექმენით mode ცვლადი. მასში შეინახეთ 'Dark' ან 'Light'. გამოიყენეთ ternary + && + || რომ შეამოწმოთ:
// თუ mode-ის მნიშვნელობა 'dark' არის დაბეჭდეთ "Dark Mode On"
// თუ mode-ის მნიშვნელობა 'light' არის დაბეჭდეთ "Light Mode On"
// სხვა შემთხვევაში (|| იოპერატორის გამოყენებით) 'Unknown mode'  

let inputer = prompt("dark or light: ");
let mode ;

inputer === 'light' ? mode = "Light Mode On" : inputer === 'dark' ? mode = "Dark Mode On" : mode = inputer || 'Unknow mode';

console.log(mode);