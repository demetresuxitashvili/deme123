import './App.css'

function App() {
  // const imgObj = {
  //   img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsn-1i2LlH8vcwMU8OxTJCf8Mlf7Y1UrUOCA&shttps://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  //   img2: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  //   img3: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/500px-ISO_C%2B%2B_Logo.svg.png"
  // }
  // const onMouseOverFunc = (e) => {
  //   e.target.innerHTML = Math.PI.toFixed(10)
  // }
  // const onMouseOutFunc = (e) => {
  //   e.target.innerHTML = "π"
  // }
  const cardData = {
    imgSrc: "https://cdn.supercommerce.io/kareem/uploads/1675811427_1748814-1689678364.jpg",
    title: "Canon EOS RP Mirrorless Lente 24-105mm STM",
    description: "world view"
  }

  return (
    <>
    {/* 2) შექმენით ობიექტი, რომელშიც შეინახავთ ფოტოს მისამართებს (src). საიტზე დაამატეთ სამი img ელემენტი, რომელთაც ამ ობიექტიდან მიაწვდით src ატრიბუტის მნიშვნელობებს. (მაგ. imgObj.img1). ფოტოებს მიეცით className და გასტილეთ css-ში. */}
    {/* <div id='container'>
      <img src={imgObj.img1} className='img1' />
      <img src={imgObj.img2} className='img2' />
      <img src={imgObj.img3} className='img3'/>
    </div> */}
    {/* 3) h1 თეგში ჩაწერეთ სიმბოლო π. მასზე მაუსის გადატარებისას π სიმბოლოს მაგივრად პის პირველი 10 ციფრი უნდა გამოჩნდეს. */}
    {/* <h1 onMouseOver={onMouseOverFunc} onMouseOut={onMouseOutFunc}>π</h1> */}
    {/* 4) შექმენით ობიექტი cardData, რომელშიც შეინახავთ ინფორმაციას პროდუქტის/ბარათის შესახებ: */}
    {/* imgSrc – ფოტოს ლინკი */}
    {/* title – სათაური */}
    {/* description – მოკლე აღწერა */}
    {/* JSX-ში გამოიყენეთ ეს ობიექტი და გამოიტანეთ ბარათი (<div> ელემენტი).img თეგს src და alt ატრიბუტები მიაწოდეთ ობიექტიდან (მაგ. cardData.imgSrc). ელემენტებს მიანიჭეთ className-ები და CSS-ში გასტილეთ. */}
    <div className='card'>
      <img src={cardData.imgSrc} className='img'/>
      <h2>{cardData.title}</h2>
      <p>{cardData.description}</p>
    </div>
    </>
  )
}

export default App