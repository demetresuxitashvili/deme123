// შექმენით მშობელი კლასი Mentor, რომელსაც ექნება კუთვნილებები: name, experience (experience-ში ჩაწერეთ begginner, intermediate ან advanced). ასევე შექმენით getter რომ გამოიტანოთ მენტორის experience.

// შექმენით შვილი კლასი Assistent, რომელიც inheritence-ის მეშვეობით იღებს Mentor-ის კუთვნილებებს (გამოიყენეთ super მეთოდი). ასევე დაუმატეთ mainLanguage კუთვნილება. საბოლოოდ გამოიძახეთ Assistent კლასის სამივე კუთვნილება და ასევე Mentor-ის მეთოდი. 

class Mentor{
    constructor(name, experience){
        this.name = name
        this.experience = experience
    }
    get menexperience(){
        return this.experience
    }
}

class Assistent extends Mentor{
    constructor(name, experience, mainLanguage){
        super(name, experience)
        this.mainLanguage = mainLanguage
    }
}

let person = new Assistent("deme", "advanced", "all")

console.log(person.name)
console.log(person.experience)
console.log(person.mainLanguage)
console.log(person.menexperience)