import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      {/* შქმენით MovieImg კომპონენტი, რომელიც დააბრუნებ ფილმის ფოტოს. ასევე შექმენით MovieDesc, სადაც ფილმის შესახებ description-ი იქნება მოცემული. (title, year, rating). ეს ორივე კომპონენტი გააერთიანეთ MovieCard კომპონენტში და ეკრანზე გამოაჩინეთ დივის სახით. MovieCard-ს დაუმატეთ Add To Favorites ღილაკი, რომელზე დაკლიკებამაც უნდა გამოიძახოს alert-ი, რომელიც გამოიტანს - 'ფილმი წარმატებით დაემატა ფავორიტებში'.  */}
      <MovieCard/>
    </>
  )
}

export default App