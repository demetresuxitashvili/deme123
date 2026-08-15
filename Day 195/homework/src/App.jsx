import './App.css'
import { ProductPrice } from './components/ProductPrice'
import { UserCard } from './components/UserCard'
import { ProfileGallery } from './components/profileGallery'
import {RatingStars} from './components/RatingStars'

function App() {
  const user = [
    {
      name: "demetre",
      age: 11,
      avatarUrl: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-1/624994077_839954945744486_7532970809056683139_n.jpg?stp=c160.0.640.640a_dst-jpg_tt6&cstp=mx640x640&ctp=s200x200&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UNmUC9yCjzcQ7kNvwHAMBrw&_nc_oc=AdqmKMHIikrd-K5ovl-jgOGWBEMiL2Pxuk_NPGy8ooGdYK5QhCUg-yueLUbZUsEEZGk&_nc_zt=24&_nc_ht=scontent.ftbs5-3.fna&_nc_gid=GizBq7laee5yw3pEkEQRGg&_nc_ss=7b2a8&oh=00_AQHZgwiZQwaXFTdYXRKT0xA_wCR9Vd2t4-rdNYfUlpKqMA&oe=6A7CB8DC",
      isAdmin: true,
      id: 1
    },
    {
      name: "luka",
      age: 16,
      avatarUrl: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/676891162_1265429052443453_7041257941595546089_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1242x1241&ctp=s1242x1241&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WujmYH3VQqoQ7kNvwH9i2nj&_nc_oc=AdoT5r0diQHPILkql_eRzXxG3omyiwHG-twVWM2FK70qoUmrbI9lqYZgYv8iSizprU7Gm_9lVR4oy_HReh5kRjOo&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=YKPPnQnZvb05Ildx4JjEiQ&_nc_ss=7b2a8&oh=00_AQG3aEXsbSjoBwNPfIegJyMviu5bO3cENP0wezwoU5aFnQ&oe=6A8348DA",
      isAdmin: true,
      id: 2
    },
    {
      name: "enri",
      age: 17,
      avatarUrl: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/768888394_122299156376246304_8478076984170641063_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=PDYTQY9DHi8Q7kNvwHuiQnc&_nc_oc=AdpVFaukHivj6A_A6Dhp3SuVxTgTV7mxiQ6xBYQD8ZCGCYlPWNPiiy1OluFwm4amkTBin3mlWYkyx7dlhOLvof2V&_nc_zt=23&_nc_ht=scontent.fkut1-1.fna&_nc_gid=ZEhmlmeaPZyHkvdZQLgIEw&_nc_ss=7b2a8&oh=00_AQFcVISkzi967YxUwhztBsxgUo0CvTfsWLtc7n0PXTaF6w&oe=6A835A21",
      isAdmin: true,
      id: 3
    }
  ]
  return (
    <>
      {/* 1) შექმენი კომპონენტი UserCard. გადაეცი props-ები name, age, avatarUrl, isAdmin(boolean).  */}
      {/* გამოაჩინე მომხმარებლის სახელი, ასაკი და ფოტო. თუ isAdmin არის true, ბარათზე გამოაჩინე პატარა ტექსტი წარწერით "Admin". */}
      {/* <UserCard name={"deme"} age={"11"} avatarUrl={"https://scontent.ftbs5-3.fna.fbcdn.net/v/t39.30808-1/624994077_839954945744486_7532970809056683139_n.jpg?stp=c160.0.640.640a_dst-jpg_tt6&cstp=mx640x640&ctp=s200x200&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_ohc=UNmUC9yCjzcQ7kNvwHAMBrw&_nc_oc=AdqmKMHIikrd-K5ovl-jgOGWBEMiL2Pxuk_NPGy8ooGdYK5QhCUg-yueLUbZUsEEZGk&_nc_zt=24&_nc_ht=scontent.ftbs5-3.fna&_nc_gid=GizBq7laee5yw3pEkEQRGg&_nc_ss=7b2a8&oh=00_AQHZgwiZQwaXFTdYXRKT0xA_wCR9Vd2t4-rdNYfUlpKqMA&oe=6A7CB8DC"} isAdmin={false}/> */}

      {/* 2) შექმენი კომპონენტი ProductPrice. გადაეცი props-ები originalPrice და discountPercent. კომპონენტმა შიგნით გამოითვალოს საბოლოო ფასი და გამოაჩინოს ძველი ფასი გადახაზულად, ხოლო ახალი ფასი მწვანე ფერით.  */}
      {/* <ProductPrice discountPercent={"80₾"} originalPrice={"60₾"}/> */}

      {/* 3) შექმენი ProfileGallery კომპონენტი, რომელიც props-ით იღებს მომხმარებლების მასივს (users). გადაეცი props-ი  users (ობიექტების მასივი, სადაც თითოეულს აქვს id, name, age, avatarUrl, isAdmin). გადაუარე users მასივს .map() მეთოდით და თითოეულისთვის დარენდერე პირველ დავალებაში შექმნილი UserCard (არ დაგავიწყდეს key prop-ის მითითება). */}
      {/* <ProfileGallery Users={user}/> */}

      {/* 4) შექმენი კომპონენტი RatingStars. გადაეცი props-ი rating (რიცხვი 1-დან 5-მდე). გადაცემული რიცხვის მიხედვით გამოაჩინე შევსებული (★) და ცარიელი (☆) ვარსკვლავები. მაგალითად, თუ rating={3}, უნდა გამოჩნდეს: ★★★☆☆. */}
      <RatingStars Rating={3} />
    </>
  )
}

export default App