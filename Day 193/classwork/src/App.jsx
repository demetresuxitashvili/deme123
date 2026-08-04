import './App.css'

function App() {
  let products = ["apple", "grape", "waterMelon", "mango", "tomato"]
  const mapFunction = products.map((str, i) => 
    <li key={"item_" + i}>{str}</li>
  )
  return (
    <>
      {/* 1)  შექმენით პროდუქტების სია. (ჩაწერეთ მინიმუმ 5 პროდუქტი). გამოიყენეთ map, რომ დააგენერიროთ li ელემენტები თავისი key-ებით, რომელსაც დანომრავთ. (რათქმაუნდა თითოეულში უნდა ეწეროს თითო პროდუქტი). შედეგი დაარენდერეთ საიტზე, <ul>-ში */}
      <ol>{mapFunction}</ol>
    </>
  )
}

export default App