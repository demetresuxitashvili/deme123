# შექმენით მშობელი კლასი სახელად Bird. მას გადაეცით init-ის საშუალებით თვისება name. ასევე მეთოდი eat და sleep.
# Bird-ს ჰყავდეს 2 სტამომავალი კლასი: Seagull და Duck. მათ მიეცით საკუთარი მეთოდი speak. 

# გამოიძახეთ შვილი კლასებიდან ყველა შექმნილი მეთოდი
class Bird:
    def __init__(self, name):
        self.name = name
    def eat(self):
        print(f"{self.name} is eating")
    def sleep(self):
        print(f"{self.name} is sleeping zzzzzz")

class Seagull(Bird):
    def speak(self):
        print("ching chong ching chong")

class Duck(Bird):
    def speak(self):
        print("cwack")

animal1 = Seagull("goal-oriented-academy")
animal2 = Duck("sandora")

print(animal1.name)
print(animal2.name)
animal1.speak()
animal2.speak()
animal1.eat()
animal2.eat()
animal1.sleep()
animal2.sleep()