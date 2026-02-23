// 2) წაიკითხეთ მთლიანი დოკუმენტაცია. გადაიმეორეთ და გაეცანით მასივის ახალ მეთოდებს. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods

// 3) მოცემულია მასივი:
// words = ["Hello", " ", "World", "!"]
// გამოიყენეთ reduce(), რომ შეაერთოთ ყველა ელემენტი ერთ სტრინგად.

words = ["Hello", " ", "World", "!"]

console.log(words.reduce(
    (acc, crval) => acc + crval
))

// 4) შექმენით რიცხვების სია. პირველ რიგში გაიგეთ რიცხვთა ჯამი, შემდეგ კი მათი ნამრავლი - reduce() ის გამოყენებით.

nums = [2, 1, 5, 6, 3, 7]

const nums_sum = nums.reduce(
    (acc, crval) => acc + crval 
)

const nums_multyply = nums.reduce(
    (acc, crval) => acc * crval
)

console.log(nums_sum)
console.log(nums_multyply)

// 5) მოცემულია სია:
// nums = [1,2,3,4,5,6,7,8,9,10]
// გამოიყენეთ:
// filter → დატოვეთ მხოლოდ ლუწები.
// map → ლუწი რიცხვები გაამრავლეთ 3-ზე.
// reduce → ბოლოს იპოვეთ დარჩენილ რიცხვთა ჯამი.

nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(nums2.filter((num) => num % 2 == 0))
console.log(nums2.map((num) => num % 2 == 0 ? num * 3 : num))
console.log(nums2.reduce((acc, crval) => acc + crval))

// 6) მოცემულია მასივი:
// words = ["python", "java", "c", "javascript", "go"]
// გამოიყენეთ:
// filter → დატოვეთ სიტყვები, რომელთა სიგრძეც აღემატება 3-ს.
// map → გადაიყვანეთ დიდ ასოებად.
// reduce → გააერთიანეთ ერთ წინადადებად.

words = ["python", "java", "c", "javascript", "go"]

console.log(words.filter((name) => name.length >= 3))
console.log(words.map((name) => name.toUpperCase()))
console.log(words.reduce((acc, crval) => acc + ", " + crval))

// 7) შექმენით პროგრამა, რომელიც იღებს რიცხვების სიას. გამოიყენეთ map(), filter() და reduce(), რომ:
// filter → დატოვოთ მხოლოდ დადებითი რიცხვები.
// map → აიყვანოთ დადებითი რიცხვები კვადრატში.
// reduce → იპოვოთ რიცხვთა ჯამი.
// პირობა ვერ მივხვდი