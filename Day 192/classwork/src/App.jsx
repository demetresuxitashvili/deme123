import './App.css'

function App() {
  let random = Math.random() < 0.5 ? 'heads' : 'tails';
  let jsLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
  let reactLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png"
  return (
    <>
      {/* 1) შექმენით random ცვლადი, სადაც Math.random() -ის გამოყენებით 50%-იანი შანსით დააბრუნებთ 'Heads' ან 'Tails'. გამოიყენეთ Ternary, რომ ფოტოს ლინკი გაუტოლდეს Javascript-ს თუ 'Heads' დაბრუნდება, ხოლო React-ს, თუ 'Tails' დაბრუნდება */}
      <img src={random === "heads" ? jsLogo : reactLogo}/>
    </>
  )
}

export default App