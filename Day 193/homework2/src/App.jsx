import React from 'react'
import './App.css'
import { createElement } from 'react'

function App() {
  // const students = ["deme", "nika", "luka", "andria", "tornike"]
  // const studentsList = students.map((str, i) => 
  //   <li key={"student_" + i}>{str}</li>
  // )
  // const h2Creat = React.createElement("h2", null, "card title")
  // const pCreat = React.createElement("p", null, "This is card creator")
  // const divCreat = React.createElement("div", {className: "card"}, h2Creat, pCreat)
  // const links = ["Home", "About", "Services", "Contact"]
  // const mapF = links.map((str, i) => 
  //   React.createElement("a", {key: "link_" + i, href: "#"}, str)
  // )
  const imgCreat = React.createElement("img", {src: "../public/ronaldo.png", alt: "error"})
  const btnCreat = React.createElement("button", null, "View Image")
  const imageContainer = React.createElement("div", {className: "image-container"}, imgCreat, btnCreat)
  return (
    <>
      {/* 3) შექმენით სტუდენტების სახელების მასივი (მინიმუმ 5 სტუდენტი). გამოიყენეთ .map() მეთოდი, რათა თითოეული სტუდენტისთვის დააგენერიროთ <li> ელემენტი შესაბამისი key ატრიბუტით. შედეგი დაარენდერეთ საიტზე <ul> თეგში. */}
      {/* <ul>{studentsList}</ul> */}
      {/* 4) React.createElement-ით შექმენით მშობელი div კლასით "card". ამ div-ში ჩააშენეთ ორი შვილი ელემენტი: */}
      {/* • h2 თეგი ტექსტით: "Card Title" */}
      {/* • p თეგი ტექსტით: "This is a card description." */}
      {/* შედეგი დაარენდერეთ საიტზე. */}
      {/* {divCreat} */}
      {/* 5) შექმენით ნავიგაციის ბმულების მასივი (მაგალითად: ["Home", "About", "Services", "Contact"]). გამოიყენეთ .map(), რომ თითოეული დასახელებისთვის შექმნათ <a> თეგი React.createElement-ის გამოყენებით. */}
      {/* გადაეცით key ატრიბუტი. */}
      {/* გადაეცით href="#" პროპსი. */}
      {/* textContent-ად მიუთითეთ შესაბამისი სახელი. */}
      {/* ყველა ბმული დაარენდერეთ nav თეგში. */}
      {/* {mapF} */}
      {/* 6) React.createElement-ით შექმენით მშობელი div კლასით "image-container". მასში ჩააშენეთ: */}
      {/* img თეგი, რომელსაც props-ად გადასცემთ src (ნებისმიერი სურათის ლინკი) და alt ატრიბუტებს. */}
      {/* button თეგი, რომლის textContent იქნება "View Image". */}
      {imageContainer}

    </>
  )
}

export default App