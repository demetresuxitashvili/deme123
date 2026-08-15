import './App.css'
import { UserStatus } from './components/UserStatus'
import { ProductCard } from './components/ProductCard'
import { UserList } from './components/UserList';
import { Alert } from './components/Alert';
import { PriceTag } from './components/PriceTag';

function App() {
  const users = [
  { id: 1, name: "გიორგი", avatar: "https://via.placeholder.com/50" },
  { id: 2, name: "ნინო", avatar: "https://via.placeholder.com/50" },
  { id: 3, name: "ანა", avatar: "https://via.placeholder.com/50" }
  ];
  return (
    <>
      {/* 2) შექმენით კომპონენტი UserStatus, რომელიც props-ით იღებს ცვლადს isOnline. თუ isOnline === true, გამოაჩინეთ მწვანე ტექსტი ან იკონკა: "მომხმარებელი არის Online". თუ isOnline === false, გამოაჩინეთ წითელი ტექსტი: "მომხმარებელი არის Offline". */}
      {/* <UserStatus status={true}/> */}
      {/* 3) შექმენით კომპონენტი ProductCard, რომელიც props-ით იღებს შემდეგ მონაცემებს: title, price და hasDiscount (boolean). შექმენით კომპონენტი ProductCard, რომელიც props-ით იღებს შემდეგ მონაცემებს: title, price და hasDiscount (boolean). თუ hasDiscount === true, ფასის გვერდით გამოაჩინეთ ტექსტი: "Sale!" (მწვანე ფერით). თუ hasDiscount === false, ეს ტექსტი არ უნდა გამოჩნდეს. */}
      {/* <ProductCard title={"egg"} price={15} hasDiscount={true}/> */}
      {/* 4) შექმენით კომპონენტი UserList, რომელიც props-ით იღებს მომხმარებლების მასივს:
      const users = [
      { id: 1, name: "გიორგი", avatar: "https://via.placeholder.com/50" },
      { id: 2, name: "ნინო", avatar: "https://via.placeholder.com/50" },
      { id: 3, name: "ანა", avatar: "https://via.placeholder.com/50" }
      ];

      .map() მეთოდის გამოყენებით დაარენდერეთ თითოეული მომხმარებელი <li> ტეგში (გამოაჩინეთ ფოტო და სახელი).
      აუცილებლად დაამატეთ key ატრიბუტი .map()-ში. */}
      {/* <UserList props={users}/> */}

      {/* 5) ექმენით კომპონენტი AlertButton, რომელიც props-ით იღებს ტექსტს message და ღილაკის სახელს buttonText. კომპონენტში დაარენდერეთ ღილაკი buttonText. ღილაკზე დაკლიკებისას (onClick) გამოიძახეთ ბრაუზერის სტანდარტული alert(message). */}
      {/* <Alert/> */}

      {/* 6) შექმენი კომპონენტი Avatar – რომელიც აბრუნებს მომხმარებლის ფოტოს (<img>). ასევე შექმენი კომპნენტი UserInfo – რომელიც აბრუნებს მომხმარებლის სახელსა და ელფოსტას (<h2> და <p>). შექმენი მთავარი კომპონენტი UserProfile, რომელიც შიგნით აბრუნებს Avatar და UserInfo კომპონენტებს, გაერთიანებულს ერთ div-ში. */}
      {/* ვერ გავიგე */}

      {/* 7) შექმენი კომპონენტი PriceTag, რომელიც იღებს price prop-ს და აბრუნებს ფასს (<span> თეგით). შექმენი კომპონენტი ProductCard, რომელიც თავის შიგნით აბრუნებს PriceTag კომპონენტს და გადასცემს მას კონკრეტულ ფასს. მთავარ App კომპონენტში გამოაჩინე ProductCard. */}
      {/* <PriceTag price={100}/> */}
    </>
  )
}

export default App