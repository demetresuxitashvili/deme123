# 1) მოცემულია Dictionary:

# student_grades ={
#     'Math': 'A',
#     'Biology': 'C',
#     'Chemistry': 'B',
#     'English': 'A',
# }
# თქვენი დავალებაა შეცვალოთ 'Chemisty' key-ს მნიშვნელობა 'A'-ით.
student_grades ={
    'Math': 'A',
    'Biology': 'C',
    'Chemistry': 'B',
    'English': 'A',
}

student_grades['Chemistry'] = 'A'
print(student_grades)

# 2) გამოიყენეთ update() მეთოდი, რომ წინა დავალების Dict-ში დაამატოთ ახალი key & value მნიშვნელობა 'Physics' : 'A'.
# შემდეგ კი ამოაგდეთ 'Biology' Dict-იდან.
student_grades.update({'Physics' : 'A'})
student_grades.pop('Biology')
print(student_grades)

# 3) შექმენით ნებისმიერი Dict (Min. 4 მნიშვნელობით). გამოიყენეთ List Comprehension, რომ სიაში შეინახოთ  ამ Dict-ის ყველა value.
monacemebi = {
    'Name': 'deme',
    'sure_name': 'sukhita',
    'age' : 10
}

lstn = [i for i in monacemebi]

print(lstn)