/* 2) კომენტარის სახით დაწერეთ თუ რა განსხვავებაა let-სა და const keyword-ებს შორის. მოიყვანეთ მაგალითი, თუ რა შემთხვევებში გამოაქვს ჯავასკრიპტს ერორი ცვლადების შექმნისას. */
// let - შეგიძლია ისეთი ცვლადი შექმნა რო შეცვლა შეგეძლოს მაგ როგორ შევქმნა let name, const - არ იცვლება იწერება იგივე ნაირათ const name
// ერორია თუ ასე ვიზამთ
// let deme = 'blablabla'
// let deme = 123 და თუ ესე შევცვლით ერორია
// აუცილებლათ უნდა შევცვალოთ რომ ერორი არ იყოს
// deme = 123
// const კი როგორც არ უნდა შეცვალო მაინც ერორს გამოიტანს რადგან ის არ იცვლება

/* 3) შექმენით 5 სხვადასხვა ცვლადი. მათ შესაქმნელად გამოიყენეთ camelCase. ცვლადები გამოიტანეთ კონსოლში და დააკვირდით მათ მნიშვნელობებს. შემდეგ მიანიჭეთ ამ ცვლადებს თვქნთის სასურველი მნიშვნელობები და თავიდან გამოიტანეთ კონსოლში. */

let myName = 'deme';
let myAge = 10;
let mySureName = 'sukhitashvili';
let myCountry = 'georgia' ;
let myCity = 'gori';
console.log(myName, myAge, mySureName, myCountry, myCity);
myName = 'giorgiluizademenikaelgujagochidimaladoooooooooooooooooooooo';
myAge = 11;
mySureName = 'sukhita';
myCountry = 'geo';
myCity = 'goritbilisibatumiimeretifotiqobuletiurekiqarelikaraletikaxeti';
console.log(myName, myAge, mySureName, myCountry, myCity);


/* 4) შექმენით 3 ცვლადი const-ის გამოყენებით. პირველ ცვლადში - ქვეყნის დასახელება, მეორე ცვლადში - დედაქალაქის დასახელება, მესამე ცვლადში კი - ქალაქის დასახელება შეინახეთ. სამივე ცვლადი ერთ ხაზზე დაბეჭდეთ კონსოლში.  */
const country = 'georgia';
const capital = 'tbilisi';
const city = 'gori';
console.log(country, capital, city);

/* 5) შექმენით 5 ცვლადი (let keyword-ის გამოყენებით). თითოეულში შეინახეთ ხილი და კონსოლში კონკატინაციის გამოყენებით გამოიტანეთ შემდეგი წინადადებები:
Fruit N1: ცვლადი 1
Fruit N2: ცვლადი 2
Fruit N3: ცვლადი 3
Fruit N4: ცვლადი 4
Fruit N5: ცვლადი 5 

მათი კონსოლში დაბეჭდვის შემდეგ შეცვალეთ ხუთივე ხილის მნიშვნელობა და გამოიტანეთ შემდეგი წინადადებები:
Updated Fruit N1: ცვლადი 1
Updated Fruit N2: ცვლადი 2
Updated Fruit N3: ცვლადი 3
Updated Fruit N4: ცვლადი 4
Updated Fruit N5: ცვლადი 5 */

let fruit1 = 'blubbery';
let fruit2 = 'strwaberry';
let fruit3 = 'mango';
let fruit4 = 'watermelon';
let fruit5 = 'cherry0';
console.log(fruit1 + ' ' +  fruit2 + ' ' + fruit3 + ' ' + fruit4 + ' ' + fruit5);

/* 6) თავიდან გადახედეთ ჩანაწერს და მოიძიეთ თქვენთვის საინტერესო ინფორმაცია JavbaScript-ის შესახებ. */
