import './App.css'
import DogOrCat from './components/DogOrCat'
import ClickBtn from './components/ClickBtn'

function App() {
  return (
    <>
      {/* 1) შექმენით კომპონენტი და მასში დაამატეთ პირობა: თუ ცვლადი fiftyFifty => True იქნება კომპონენტში დაარენდერეთ კატის ფოტო, ხოლო თუ False იქნება დაარენდერეთ ძაღლის ფოტო */}
      {/* <DogOrCat/> */}
      {/* 2)  შექმენით კომპონენტი და მასში დაამატეთ EventHandler-ი. (handleClick). ღილაკზე დაკლიკებისას მისი background ფერი უნდა გახდეს წითელი და ღილაკი ზომაში გაიზარდოს. */}
      <ClickBtn/>
    </>
  )
}

export default App