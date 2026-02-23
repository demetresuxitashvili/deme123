// 1
// function stray(numbers) { ვქმნით ფუნქციას ფუნქციას სახელად გადავცემთ stray ხოლო პარამეტრს numbers-ს
//   let common=0; ვქმნით ცვლადს ვინახავთ ინტეჯერს და სახელს ვარქმევთ common
  
//   if(numbers[0]===numbers[1] || numbers[0]===numbers[2]){ თუ ნამბერი 0 უდდრის 1 ინდექს ანუუ ვიგებთ დუბლიკატია თუ არა თუ ფოლსია შესრულდება შემდეგი პირობა 0 === 2 ამითაც დუბლიკატ ვიგებთ თუ პირველუ ფოლსია ვიგებთ რომ 1 ინდექსე დგომი ზედმეტია
//     common=numbers[0] შემდეგ ცომონში ვამატებთ რაც მეორდება
//   } else{
//     common=numbers[1] სხვა შემთხვევაში რაც ზედმეტია
//   }
  
//   for(let i=0; i<numbers.length; i++){ ვუვლით თითო იტერაციით number-ს
//     if(numbers[i]!== common){ თუ ნამბერის ყველა ინდექსი არ უდრის ცომონ ცვლადს
//       return number[i] უბრალუდ აბრუნებს ნუმბერის ინდექს
//     }
//   }

// 2
// function filter_list(l) { vქმნით ფუნქციას სახელად filter_list პარამეტრად l-ს
//   let int=[] ვქმნით ცვლადს შეცვლადს სადაც ვინახავთ ლისტს
//   for(let i=0; i<l.length; i++){ ვუვლით ფორ ლუპით
//     if(typeof l[i]==='number'){ თუ ტაიპი არის ნამბერი
//       int.push(l[i]) ინტშ დაემატება ლ-ის ინდექსი
//     }
//   }
//   return int ბოლოს კი ვაბრუნებთ ინტ-ს
// }

// 3
// function findNeedle(haystack) { ვქმნით ფუნქციას სახელად findNeedle პარამეტრად ჰaystack
//   const index=haystack.indexOf('needle') ვქმნით ცვლადს სადაც იქნება შენახული შემოწმება ჰაისტაკში.იქნება თუ არა ნდეელდე
//   return "found the needle at position "+index დააბრუნებს ბოლოს კი კონკანიტაციის სააშვალებით "found the needle at position ნიდლია თუ არა"
// }