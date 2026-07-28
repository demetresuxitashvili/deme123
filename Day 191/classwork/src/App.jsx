import './App.css'

function App() {
  function reactImg(e) {
    e.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png")
    e.target.setAttribute("alt", "react logo")
  }

  return (
    <>
      {/* 1) Event Listeners შექმენით რეაქთის ფოლდერი. საიტზე დაამატეთ ჯავასკრიპტის ლოგოს ფოტო, მას ვგაუწერეთ alt ატრიბუტიც. გამოიყენეთ mouseOver event listener-ი, იმისთვის რომ ფოტოზე დაკლიკებისას ჯავასკრიპტის ლოგო რეაქთის ლოგოთი შეიცვალოს. ასევე შეუცვალეთ alt ატრიბუტი */}
      const jsImg = <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="js logo" onMouseOver={reactImg} />
    </>
  )
}

export default App