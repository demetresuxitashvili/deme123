# Filter ის გამოყენებით:
# 1) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] დატოვე მხოლოდ ის ენები რომლების სიგრძეც მეტია 5ზე.
languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

filter_languages = list(filter(lambda char: len(char) > 5, languages))

print(filter_languages)

# 2) foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H"]
# სიიდან დატოვე მხოლოდ ჯანსაღი საკვები —> H
foods = ["salad H", "burger J" , "fish H","fries J","fruits H","nuts H", 'dedikos katletebi H']

filter_foods = list(filter(lambda char: char[-1] == 'H', foods))

print(filter_foods)

# Map ის გამოყენებით:
# 3) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] თითოეულ ელემენტს წინ დაუმატეთ "I study"
languages2 = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

map_languages = list(map(lambda names: names + ' I study', languages2))

print(map_languages)

# 4) minutes = [60, 120, 180, 240, 30] მოცემულია წუთები სიაში,map() ის გამოყენებით წუთები გადაიყვანეთ საათებში და დაპრინტეთ
# Hint: hours = minutes / 60
minutes = [60, 120, 180, 240, 30]

hours = list(map(lambda nums: nums / 60, minutes))

print(hours)