// დაასრულეთ საკლასო დავალებები:

// 2) მომხმარებელს შემოაყვანინეთ რიცხვი ( 0 - 100 ) 
// ქულის მიხედვით დაადგინეთ შეფასება:

// 90--100 -> "A"
// 80--89 -> "B"
// 70--79 -> "C"
// 60--69 -> "D"
// 0--59 -> "F" 
// სხვა მნიშვნელობის შემთხვევაში -> "invalid score"
// (გამოიყენეთ switch case) 
let examen = 100;

switch(examen){
    case examen <= 100 && examen >= 90:
        console.log('A')
        break;
    case examen <= 90 && examen >= 80:
        console.log('B')
    break;
    case examen <= 79 && examen >= 70:
        console.log('C')
    break;
    case examen <= 69 && examen >= 60:
        console.log("D")
    break;
    case examen <= 59 && examen >= 0:
        console.log('F')
    break;
};

// 3) for loop-ის გამოყენებით დაბეჭდეთ რიცხვები 1-დან 10-მდე.
for(let i = 0; i <= 10; i ++){
    console.log(i)
};

// 4) for loop- ის გამოყენებით დაბეჭდეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები.

for(let i = 0; i <= 20; i += 2){
    console.log(i)
};

// 5) for loop-ის გამოყენებით დაბეჭდეთ 1-დან 5-ის ჩათვლით ციფრების კვადრატები.
// ვერ გავიგე

// 6) for loop-ის გამოყენებით დაბეჭდეთ რიცხვები 35-დან 15-მდე.
for(let i = 35; i >= 15; i --){
    console.log(i)
};
