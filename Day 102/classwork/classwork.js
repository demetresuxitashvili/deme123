// 1) ცვლადში შეინახეთ თქვენი ასაკი, შემდეგ კი დაწერეთ Conditional statement-ები:
// თუ ასაკი ნაკლებია 10-ზე დაბეჭდეთ 'child', თუ ასაკი მეტია 10-ზე მაგრამ ნაკლებია 18-ზე კონსოლში გამოიტანეთ 'Teen', ყველა სხვა შემთხვევაში Adult.
let myAge = 11;
if(myAge < 10){
    console.log('child')
}
else if(myAge > 10 && 18 > myAge){
    console.log('Teen')
}
else{
    console.log('Adult')
};

// 2) გამოიყენეთ Math.random() რათა დააგენერიროთ რენდომ რიცხვი 0-დან 100-მდე. თუ რიცხვი 50-ზე ნაკლები აღმოჩნდება გამოიტანეთ False, ხოლო თუ 50-ზე მეტი იქნება გამოიტანეთ False
let examen = Math.floor(Math.random());

if(examen < 50){
    console.log(false)
}
else if(examen > 50){
    console.log(true)
}
else{
    console.log('hihiha')
};

// 3) შექმენით ორი ცვლადი და შეინახეთ ნებისმიერი მნიშვნელობა. მკაცრი შედარების ოპერატორით შეადარეთ ტოლია თუ არა მათი მნიშვნელობები ერთმანეთს. შედეგი გამოიტანეთ კონსოლში
let demetresSaklasoSworiaXo = 'demes saklaso';

let sworiaSaklaso = 'sworia';

console.log(demetresSaklasoSworiaXo === sworiaSaklaso);