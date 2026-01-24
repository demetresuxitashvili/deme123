# 1) შექმენით lambda ფუნქცია რომელიც იღებს ორ რიცხვს. ფუნქციამ უნდა დააბრუნოს პირველი რიცხვი აყვანილი მეორეს ხარისხში.
kvadrati = (lambda num1, num2: num1 ** num2) (67, 41)

print(kvadrati)

# 2) შექმენით lambda ფუნქცია რომელიც იღებს მართკუთხედის სიგრძეს და სიგანეს, დააბრუნეთ ამ მართკუთხედის პერიმეტრი.
martkutxedi = lambda num1, num2: (num1 + num2) * 2 

print(martkutxedi(5, 5))

# 3) შექმენით lambda ფუნქცია რომელიც იღებს სიტყვას და ამ სიტყვას აბრუნებს დიდ ასოებში (Uppercase).
suisuisuisui = lambda num1: num1.upper()

print(suisuisuisui('group 71'))

# 4) შექმენით lambda ფუნქცია რომელიც რომელიც იღებს სიტყვას და აბრუნებს ამ სიტყვის სიგრძეს.
sityva = lambda num: len(num)

print(sityva('demetre'))