/* 1) შექმენით სამი სხვადასხვა ცვლადი let-ის გამოყენებით: word1, word2, word3. სამივეში შეინახეთ სხვადასხვა სტრინგი და გამოიტანეთ კონსოლში. გამოიყენეთ toUpperCase მეთოდი რომ გადაიყვანოთ ეს სტრინგები დიდ ასოებად და შეინახოთ ახალ ცვლადებში (შემდეგ ისევ გამოიტანეთ კონსოლში). */
let word1 = 'deme'
let word2 = 'nika'
let word3 = 'blablabla'
console.log(word1)
console.log(word2)
console.log(word3)
word1 = word1.toUpperCase()
word2 = word2.toUpperCase()
word3 = word3.toUpperCase()
console.log(word1)
console.log(word2)
console.log(word3)

/* 2) გამოიყენეთ დღეს ნასწავლი მეთოდი, რომ ამ სტრინგს მოაშოროთ ცარიელი სფეისები:
const variable = '     Group 71      ' */
const variable = '     Group 71      '
console.log(variable.trim())

// 3) კომენტარის სახით ახსენით რას აკეთებს - Math.random() და Math.floor()
// Math random - ვპოვლოპთ მათემატიკის ნებისმიერ წილად რიცხვს 0-1-მდე და შეგივიძლია ჩავატაროთ მათმატიკური ოპერაციები, floor - კი აბრუნებს ამ წილადი რიცხვის პირველ რიცხვს

// 4) დააგენერირეთ რენდომ რიცხვი 0-დან 71-მდე და გამოიტანეთ კონსოლში. ეს რიცხვი აუცილებლად უნდა იყოს მთელი, ამიტომ დაამრგვალეთ.
console.log(Math.floor(Math.random() * 71)) 