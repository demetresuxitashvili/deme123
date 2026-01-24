// 2) ახსენით რისთვის გვჭირდება მეთოდები JavaScript-ში. ჩამოწერეთ და განმარტეთ დღეს ნასწავლი ყველა მეთოდი.
// math.floor - წილად რიცხვს აბრუნებს მთლად, math.random() - აბ რუნებს რანდომულ რიცხვს, console.log() – დამაბრუნებელი ფუნქცია, concat() - აერთებს წინადადებებს, trim() - შლის სფეისებს, trimStrat – შლის სფეიცებს დასაწყისში, trimEnd - შლის სფეისებს დასასრულში, length() - ამოწმებს ტექსტის რაოდენობას, toUpperCase - შეგვიძლია ტექსტი გადავაქციოთ დიდ ასოებათ, toLowerCase - შეგვიძლია გადავაქციოთ რაიმე ტექსტი პატარა ასოებათ, endsWith - ამოწმებს სრულდება თუ არა ამ ასოთი (ბულეანს აბრუნებს), startWith - 

// 3) ცვლადში შეინახე სტრინგი "javascript" და გადაიყვანე დიდ ასოებად.
let cvladi1 = 'javascript';
console.log(cvladi1.toUpperCase());

// 4) ცვლადში შეინახე სტრინგი "HELLO WORLD" და გადაიყვანე პატარა ასოებად.
let cvladi2 = 'HELLO WORLD';
console.log(cvladi2.toLowerCase());

// 5) შეამოწმე სიტყვა "Sunrise" იწყება თუ არა "Sun"-ით და დაკვირდი შედეგს კონსოლში.
let cvladi3 = "Sunrise";
console.log(cvladi3.startsWith('Sun'));

// 6) შეამოწმე მთავრდება თუ არა  "GOA Martial Arts" - "S"-ზე. დააკვირდით კონსოლს და შედეგი ახსენით კომენტარის სახით.
let cvladi4 = 'GOA Martilad Arts';
console.log(cvladi4.endsWith('S'));

// 7) შეამოწმეთ:

// • "Hello" ბოლოვდება "o"-თი?
console.log('Hello'.endsWith('o'));

// • "document.pdf" ბოლოვდება "pdf"-ით?
console.log('document.pdf'.endsWith('pdf'));

// • "programming" ბოლოვდება "ing"-ით?
console.log('Programming'.endsWith('ing'));

// 8) გამოიყენე Javascript-ის ერთ-ერთი მეთოდი იმისთვის, რომ სტრინგები - "     test" და "test      "  გაასუფთავოთ ზედმეტი Space-ებისგან.
let cvladi5 = "     test";
console.log(cvladi5.trimStart());
let cvladi6 = "test      ";
console.log(cvladi6.trimEnd());

// 9) გამოიყენეთ concat() მეთოდი "Hello"-სა და "World"-ის გასაერთიანებლად.
console.log('Hello'.concat(' World'));

// 10) გამოიყენეთ concat() მეთოდი იმისთვის, რომ მიიღოთ სტრინგი - "Goal-Oriented Academy".
let cvladi7 = 'Goal-Oriented';
console.log(cvladi7.concat(" Academy"));

// 11) გამოიყენეთ Math.random() და ორი რენდომ რიცხვი შეინახეთ ორ სხვადასხვა ცვლადში. კონსოლში დაბეჭდეთ ამ რიცხვებს შორის შესრულებული 5 არითმეტიკული ოპერაცია.
let cvladi8 = Math.floor(Math.random() * 30);
let cvladi9 = Math.floor(Math.random() * 30);
console.log(cvladi8 * cvladi9);
console.log(cvladi8 / cvladi9);
console.log(cvladi8 - cvladi9);
console.log(cvladi8 + cvladi9);

// 12) თქვენი სიტყვებით ახსენით რა პრინციპით მუშაობს Math.floor(). რას ფიქრობთ: ემორჩილება თუ არა იგი მათემატიკური დამრგვალების სტანდარტებს ?
// Math.floor-ი წილად რიცხვებს აქცევს მთლიან რიცხვად მაგ 1.3289577020430055 დააბრუნებს 1, არ ემორჩილება

// 13) randomNum ცვლადში შეინახეთ რიცხვი, რომელსაც Javascript-ი დააგენერირებს 0-დან 50-მდე დიაპაზონში. მიღებული შედეგი აუცილებლად დაამრგვალეთ იმისათვის, რომ მიიღოთ მთელი რიცხვი.
let randomNum = Math.floor(Math.random() * 50);
console.log(randomNum);

// 14) randomNum2 ცვლადში შეინახეთ რენდომად დაგენერირებული რიცხვი 0-დან 71-ის დიაპაზონში და შეინახეთ მთელი რიცხვის სახით.
let randomNum2 = Math.floor(Math.random() * 71);
console.log(randomNum2);

// 15) მოიძიეთ Math ობიექტის ისეთი მეთოდი, რომელიც რიცხვებს მათემატიკური სტანდარტის გათვალისწინებით ამრგვალებს.
