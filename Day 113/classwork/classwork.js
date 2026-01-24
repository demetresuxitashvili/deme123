// 1) let languages = ["Python", "JS", "Java", "C++"];
// მოცემულია სიტყვების მასივი. იპოვე სიტყვა “Java”. როგორც კი იპოვი, დაბეჭდე და გააჩერე ლუპი.
let languages = ["Python", "JS", "Java", "C++"];
for(let i = 0 ; i < languages.length; i++){
    console.log(languages[i])
    if(languages[i] === "Java"){
        break
    }
}

// 2) დაბეჭდე რიცხვები 1-დან 150-მდე. როგორც კი შეხვდები რიცხვს, რომელიც იყოფა 6-ზე, მაგრამ არ იყოფა 12-ზე, გააჩერე ლუპი.
for(let i = 0; i < 150; i ++){
    console.log(i)
    if(i / 6 &&  )
}

// 3)შექმენით მასივი პროგრამირების ენებზე,შემდეგ popის საშუალებით დაამატეთ ორი ელემენტი და შემდეგ პირველი და ბოლო ელემენტი ამოიღეთ შესაბამისი მეთოდებით,გამოიტანეთ მიღებული მასივი
let languages2 = ["css", 'html', 'js', 'py']

languages2.push("c++", 'Java')
languages2.shift()
languages2.pop(-1)

console.log(languages2)