// 1) შექმენი პროგრამა, რომელიც ეკრანზე გამოაჩენს ციფრს 10. setInterval-ის გამოყენებით ყოველ 1 წამში ეს ციფრი უნდა შემცირდეს 1-ით (9, 8, 7...). როდესაც ტაიმერი ჩამოვა 0-ზე, ინტერვალი უნდა გაჩერდეს (clearInterval) და ეკრანზე დაიბეჭდოს შეტყობინება: 'Time is up!'
// let ati = 10

// let interval = setInterval(() => {
//     console.log(ati);
//     ati--;
//     if (ati < 0) {
//     clearInterval(interval);
//     console.log("Time is up!");
//     }
// // }, 1000);

// 2) დაწერე კოდი, რომელიც ეკრანზე რეალურ დროში აჩვენებს მიმდინარე საათს, წუთსა და წამს (ფორმატით: HH:MM:SS). დრო უნდა ნახლდებოდეს ყოველ 1 წამში Date ობიექტის დახმარებით.
// (ეს ინტერვალი არასდროს არ უნდა გაჩერდეს და მოქმედებდეს იქამდე, სანამ მომხმარებელი გვერდს არ დახურავს).
function updateClock() {

    // მიმდინარე დრო
    let now = new Date()

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 10) {
        hours = '0' + hours
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }
    
    //  HH:MM:SS

    let currentTime = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').textContent = currentTime;

}

updateClock();

setInterval(updateClock, 1000)

// // 3) შექმენი მასივი, რომელშიც შეინახავ 5 სხვადასხვა ფერს. setInterval-ის გამოყენებით ყოველ 1.5 წამში შეცვალე საიტის ფონის ფერი მასივიდან მორიგი ფერით. მას შემდეგ, რაც პროგრამა ყველა ფერს ერთხელ მაინც გადაატრიალებს (ანუ 5-ვე ფერი გამოჩნდება), ინტერვალი უნდა გაჩერდეს.
// let colors = ['#780000', '#03045e', '#d00000', '#480ca8', "#ffc300"]

// let index = 0;

// let interval = setInterval(() => {
//     document.body.style.backgroundColor = colors[index];

//     index++;

//     if (index === colors.length){
//         clearInterval(interval);
//     }


// }, 1500)

// 4) შექმენი ცვლადი ტექსტით: const message = "JavaScript is cool!".
// setInterval- ის გამოყენებით, ყოველ 0.5 წამში ეკრანზე გამოაჩინე ამ ტექსტის მომდევნო ასო (ჯერ "J", შემდეგ "Ja", შემდეგ "Jav"...). როდესაც მთლიანი წინადადება დაიბეჭდება, გამოიყენე clearInterval, რათა კოდი შეწყდეს.

// const typeItem = document.getElementById('typeItem')

// const message = "JavaScript is cool!"
// let charCount = 1;

// const typeInterval = setInterval(() => {
//     typeItem.textContent = message.slice(0, charCount)
//     charCount ++;

//     if(charCount > message.length){
//         clearInterval(typeInterval)
//     }
// }, 100)

// 5) წარმოიდგინე, რომ საიტს სჭირდება ყოველ 3 წამში შეამოწმოს, არის თუ არა ახლა სამუშაო დრო. setInterval-ში Date ობიექტის გამოყენებით გაიგე მიმდინარე საათი (getHours()). თუ საათი არის 9:00-დან 18:00-მდე, ეკრანზე დაწერე "The site is active". მაგრამ, თუ საათმა გადააჭარბა 18:00-ს, ეკრანზე გამოიტანე "The working hours are over on this site." და გააჩერე ინტერვალი.