// 2) შექმენით მასივი, სადაც ჩვენს მიერ ნასწავლ პროგრამირების ენებს შეინახავთ.
// პირველ რიგში ცალ-ცალკე ხაზებზე გამოიტანეთ სიის თითოეული ელემენტი.
// შემდეგ კი სცადეთ უფრო მარტივი გზით: for loop-ის საშუალებით გამოიტანეთ სიის თითოეული ელემენტი.
let num1 = ['pyton', 'java script', 'html', 'css'];

// 3) შექმენით რიცხვების სია და დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი. შედეგი გამოიტანეთ კონსოლში.
let lstn1 = [2, -3, 5, -8, 10];
let sum = 0;

for(let i = 0; i < lstn1.length; i ++){
    if(i > 0){
        sum += i
    };
};

console.log(sum);

// 4) შექმენით ორი რიცხვეის სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიმავე წევრებს.
// თუ რიცხვები ერთმანეთს ემთხვევა - mutualNums სიაში დაამატეთ საერთო ელემენტები.
let me_friend = ['andria', 'bondo', 'deme'];
let unknow_friend = ['deme', 'luka', 'alexssandre'];
let mutualNums = [];

for(let i = 0; i < me_friend.length; i ++){
    for(let z = 0; z < unknow_friend.length; z ++){
        if(me_friend[i] === unknow_friend[z]){
            mutualNums.push(unknow_friend[z])
        };
    };
};

console.log(mutualNums);

// 5) დაასრულეთ მოცემული პროექტი:
// https://www.frontendmentor.io/challenges/clipboard-landing-page-5cc9bccd6c4c91111378ecb9/
// დავასრულე 