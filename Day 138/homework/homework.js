// შექმენით ფორმა ზუსტად ასეთი დიზაინით. დაუმატეთ ფუნქციონალი:
// შეამოწმეთ Name input-ი აღემატება თუ არა 5 სიმბოლოს. ასევე შეამოწმეთ Email-ის ველში მომხმარებელი შემოიტანს თუ არა @ სიბლოსა და წერტილს. ასევე დაამატეთ ვალიდაცია, რომ Password და Confirm Password ემთხვეოდეს ერთმანეთს. დაამატეთ alert() შესაბამისი მესიჯით თითოული დარღვევისთვის.
let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value
    let cp = document.getElementById("cp").value

    console.log(name)
    console.log(email)
    console.log(pass)
    console.log(cp)

    if(name.length > 5){
        alert("შენი სახელი აღემატება 5-ს!")
        e.preventDefault()
    }
    else if(pass !== cp){
        alert("პაროლი და პაროლის დამადასტურებელი არ ემთხვევა ერთმანეთს!")
        e.preventDefault()
    }
})