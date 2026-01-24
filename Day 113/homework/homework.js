// 2) კომენტარით ახსენით რაში გვეხმარება break keyword-ი.
// ბრეაკი წყვიტავს კოდს

// 3) დაწერეთ ციკლი, რომელიც მასივში ეძებს პირველ ლუწ რიცხვს. დაბეჭდეთ, შემდეგ ამოაგდეთ ეს რიცხვი სიიდან და გაწყვიტეთ პოვნის შემდეგ loop-ი.
numbers = [9, 1, 3, 44, 5 , 7]

for(let i = 0; i < numbers.length; i ++){
    if( numbers[i] % 2 == 0){
        console.log(numbers[i])
        numbers.splice(i, 1)
        break
    }
}

// 4) მომხმარებელს შემოატანინეთ prompt() ის საშუალებით პაროლი. დაწერეთ while loop პროგრამა: იქამდე გამოიტანოს 'wrong passsword, try again' სანამ პაროლი არ დაემთხვევა 'admin123'-ს. ამ შემთხვევაში გამოიტანეთ 'Access Granted' და გაწყვიტეთ ციკლი.
user_input = prompt("enter your password: ")
user_pass = 'admin123'

while(user_input !== user_pass){
    console.log("wrong password try again!")
    console.log(prompt("enter yor password: "))
}

// 5) შექმენით მასივი, სადაც ჩაწერთ 5 საყვარელი ფილმის/სერიალის სახელწოდებას. დაბეჭდეთ სიიდან პირველი და ბოლო ელემენტები at() მეთოდის გამოყენებით.  შემდეგ კი ამოშალეთ მასივიდან მეორე და მეოთხე ინდექსზე მდგომი ელემენტები.
me_fv_films = ['tetri baiagebi', 'iuri boika', 'mwvane quchis xulignebi', 'cobra kai', 'gladiatori']

console.log(me_fv_films.at(0))
console.log(me_fv_films.at(-1))

console.log(me_fv_films.splice(2, 1))
console.log(me_fv_films.splice(4, 1))

// 6) მოცემულია მასივი:
// ['one', 'two']

// გამოიყენეთ shift/unshift იმისთვის რომ:
// • მასივის დასაწყისში დაამატოთ 'one'
// • ამოშალოთ პირველი ელემენტი

// საბოლოო შედეგი კონსოლში გამოიტანეთ.
lists = ['one', 'two']

lists.shift()
console.log(lists)
lists.unshift('one')
console.log(lists)

// 7) შეასრულეთ პროექტი მხოლოდ HTML&CSS-ის გამოყენებით: 
// ok