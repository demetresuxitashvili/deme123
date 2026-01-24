// 1) შექმენით სახელების სია. for loop ის გამოყენებით გამოიტანეთ სიის თითოეული წევრი.
let names = ['deme', 'andria', 'alexandre', 'garanacho', 'luka', 'lukaku', 'siuuuuuuuuuuuuuuuuuuuuuuu'];

for(let i = 0; i < names.length; i ++){
    console.log(names[i])
};

// 2) შექმენით რიცხვების სია და დაითვალეთ მხოლოდ ლუწი რიცხვების ჯამი. შედეგი გამოიტანეთ კონსოლში.
let nmbr = [2, 4, 6, 7, 67, 12, 3, 1,];
let sum = 0;

for(let i = 0; i < nmbr.length; i ++){
    if(Number[nmbr] % 2 == 0){
        console.log(sum += i)
    };
};

// 3) შექმენით ორი სახელების სია, შეამოწმეთ შეიცავს თუ არა ერთიდაიგივე წევრებს სიები 
// თუ შეიცავს - mutualNames სიაში დაამატეთ საერთო ელემენტები.

let names1 = ['deme', 'luka', 'alexandro garnacho', 'lukaku'];
let names2 = ['deme', 'lukaku', 'alexandro garnacho'];
let mutualNames = [];

for(let i = 0; i < names1.length; i ++){
    for(let x = 0; x < names2.length; x ++){
        if(names1[i] === names2[x]){
            mutualNames.push(names2[x])
        };
    };
};

console.log(mutualNames);