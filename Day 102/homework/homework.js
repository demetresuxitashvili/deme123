// 2) გადახედეთ რესურსებს და თავიდან გაიაზრეთ თითოეული კოდის სინტაქსი + მათი მუშაობის პრინციპი. 
// გავიაზრე

// 3) შეადარეთ ისინი ერთმანეთს ყველა ძირითადი შედარების ოპერატორით (>, <, >=, <=, ==, ===, !=) და შედეგები დაბეჭდეთ კონსოლში.
let nmb1 = 6;
let nmb2 = 7;
console.log(nmb1 > nmb2);;
console.log(nmb1 < nmb2);
console.log(nmb1 >= nmb2);
console.log(nmb1 <= nmb2);
console.log(nmb1 == nmb2);
console.log(nmb1 === nmb2);
console.log(nmb1 != nmb2);
console.log(nmb1 !== nmb2);

// 4) შექმენით ცვლადი age. თუ age ნაკლებია 18-ზე → დაბეჭდეთ "You are underaged"
// age 18–ზე მეტია ან ტოლია → დაბეჭდეთ "You are adult"
let age = 11;
if(age < 18){
    console.log("You are underaged")
}
else if(age >= 18){
    console.log('You are adult')
};

// 5) შექმენით ორი Boolean ცვლადი:
// isStudent და hasAccess. ლოგიკური ოპერატორების გამოყენებით დაადგინეთ შეუძლია თუ არა მოსწავლეს სისტემაში შესვლა. (განიხილეთ ყველა შესაძლო შემთხვევა)
let isStudent = true;
let hasAccess = false;
if(isStudent === true && hasAccess === true){
    console.log(true)
}
else{
    console.log(false)
};

// 6) შექმენით ცვლადი score. გამოიყენეთ Conditial Statement-ები ქულების შესამოწმებლად და კონსოლში გამოიტანეთ შესაბამისი პასუხები.
// თუ:
// score >= 90 → "A"
// score >= 70 → "B"
// score >= 50 → "C"
// სხვა შემთხვევაში → "F"
let score = 90;
if(score >= 90){
    console.log('A')
}
else if(score >= 70){
    console.log('B')
}
else if(score >= 50){
    console.log('C')
}
else{
    console.log('F')
};

// 7) შექმენით ორი ცვლადი password და confirmPassword. შეამოწმეთ
// • ემთხვევა თუ არა ისინი ერთმანეთს
// • არის თუ არა პაროლი მინიმუმ 8 სიმბოლოსგან შემდგარი
// შედეგი დაბეჭდეთ კონსოლში.
let password = 'd1234';
let confirmPassword = 'd12345';
if(password === confirmPassword && password.length === 8){
    console.log(password)
}
else{
    console.log(false)
};

// 8) შექმენით ორი რიცხვითი ცვლადი.
// შეამოწმეთ:
// ორივე მეტია თუ არა 10-ზე (&&)
// ერთ-ერთი მაინც მეტია თუ არა 10-ზე (||)
let number1 = 67;
let number2 = 71;
if(number1 >= 10 && number2 >= 10){
    console.log(true)
}
else if(number1 >= 10 || number2 >= 10){
    console.log(1)
}
else{
    console.log(false)
};

// 9) შექმენით ცვლადი dayNumber (1–დან 7-მდე).
// if / else გამოყენებით დააბრუნეთ კვირის შესაბამისი დღე
// (1 → ორშაბათი, 7 → კვირა).
let dayNumber = 4 ;
if(dayNumber === 1){
    console.log('orshabati')
}
else if(dayNumber === 2){
    console.log('samshabati')
}
else if(dayNumber === 3){
    console.log('otxshabati')
}
else if(dayNumber === 4){
    console.log('xutshabati')
}
else if(dayNumber === 5){
    console.log('paraskevi')
}
else if(dayNumber === 6){
    console.log('shabati')
}
else if(dayNumber === 7){
    console.log('kvira')
}
else{
    console.log('get out 67')
};

// 10) შექმენით ცვლადი username.
// თუ:
// ცარიელია → "Username is required"
// სიგრძე ნაკლებია 4-ზე → "Username is too short"
// სხვა შემთხვევაში → "Username accepted"
let username = '6767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767';

if(username === ''){
    console.log("Username is required")
}
else if(username.length <= 4){
    console.log("Username is too short")
}
else{
    console.log('get out 67')
};

// 11) შექმენით ცვლადი isLoggedIn.
// თუ false არის, ! ოპერატორის გამოყენებით დაბეჭდეთ
// "Please log in".
let isLoggedIn = true;

if(isLoggedIn === true){
    console.log('you are loged')
}
else if(isLoggedIn !== true){
    console.log('Please log in')
};

// 12) ახსენით განსხვავება
// == და ===
// && და || ოპერატორებს შორის. მოიყვანეტ მაგალითები.
// == - არა მკაცრი უდრის უდრის ნიშანი, === - მკაცრი უდრის უდრის ტოლობა, && - and, || - or

// 13) ცვლადში შინახეთ ტემპერატურა. გრადუსის მიხედვით გამოიტანეთ:

// temp < 0 → "Freezing"
// 0–20 → "Cold"
// 21–30 → "Warm"
// 30 → "Hot"

let temp = 4;

if(temp <= 0){
    console.log('Freezing')
}
else if(temp <= 20 && temp > 0){
    console.log('Cold')
}
else if(temp <= 30 && temp > 21){
    console.log('Warm')
}
else if(temp >= 30){
    console.log('Hot')
};