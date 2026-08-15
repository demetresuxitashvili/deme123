import './App.css'
import { Header } from './components/Header'
import { Cart } from './components/Cart'

function App() {
  // 1) საყიდლების საიტისთვის შექმენით ორი კომპონენტი: header და პროდუქტის card-ი.
// header-ში დაამატეთ საიტის სახელი, ნავიგაციის ლინკები და cart ფოტო. card-ში კი უნდა იყოს პროდუქტის დასახელება, ფოტო, description და Buy now ღილაკი. საიტზე 5 სხვადასხვა პროდუქტი დაარენდერეთ. ორივე ერთ საიტზე დაარენდერეთ.
  return (
    <div>
      <Header/>
      <Cart imgSrc={"https://mydiagnostics.in/cdn/shop/articles/img-1748326586409_005ab744-a35d-46b3-a1bf-dcced6bf062a.jpg?v=1778665691"} description={"milk"}/>
      <Cart imgSrc={"https://www.paperandtea.com/cdn/shop/articles/Apfel_7ebe153a-a4ac-473a-9217-658894dfc968.jpg?v=1765535477&width=1500"} description={"apple"}/>
      <Cart imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfGXqB8gSrxL6QC4FTTkKFFqcP2NxNcY2ng&s"} description={"grape"}/>
      <Cart imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCR2eBUKsjuLAl0oqz7YvkZJFU1C3znejG4g&s"} description={"watermelon"}/>
      <Cart imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvMvBll2kFRe95_mBtOfQQ8E8P614GsVL9A&s"} description={"bread"}/>
    </div>
  )
}

export default App