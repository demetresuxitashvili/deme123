# 1) დაწერეთ ფუნქცია reverse_lst, რომელიც მიიღებს სიას და დააბრუნებს მის შებრუნებულ ვერსიას.
def reverse_lst(list):
    return list[::-1]

print(reverse_lst([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))

# 2) დაწერეთ პირველი დავალების ანალოგი ფუნქცია სტრინგებზე, სახელად reverse_str.
def reverse_str(str_list):
    return str(str_list[::-1])

print(reverse_str(['banana', 'apple', 'strawbery']))

# 3) შექმენით ფუნქცია double, რომელიც მიიღებს სიას და დააბრუნებს ახალ სიას, სადაც ყველა რიცხვი გაორმაგებულია.
def double(double_list):
    list = []
    for i in double_list:
        list.append(i * 2)
    return list

print(double([1, 2, 3, 4]))

# 4) დაწერე ფუნქცია sum_of_digits, რომელიც მიიღებს რიცხვს და დააბრუნებს მის ციფრთა ჯამს (მაგ. 123 → 6).
def sum_of_digits(digits):
    sum = 0
    for i in str(digits):
        sum + int(i)

print(sum_of_digits(123))

# 5) დაწერე ფუნქცია divisors, რომელიც მიიღებს რიცხვს და დააბრუნებს მის ყველა გამყოფს.
#    მაგ. მოცემულია რიცხვი 4. 4-ის გამყოფებია: 1, 2, 4. შესაბამისად ამ რიცხვის გამყოფებს აბრუნებთ სიის სახით --> [1, 2, 4]
#    12 -> [1, 2, 3, 4, 6, 12]
#    45 -> [1, 3, 5, 9, 15, 45]
def divisors(num):
    bla = []
    for i in range(1, num+1):
        if num % i == 0:
            bla.append(i)
    return bla

print(divisors([12]))

# 6) შექმენით ფუნქცია max, რომელსაც არგუმენტად გადასცემთ რიცხვების სიას და პასუხად დააბრუნებს ამ რიცხვებიდან მაქსიმალურს.
def max(max_list):
    return len(max_list)

print(max([2, 3, 4, 5, 6, 1]))

# 7) შექმენით ფუნქცია min, რომელსაც არგუმენტად გადასცემთ რიცხვების სიას და პასუხად დააბრუნებს ამ რიცხვებიდან მინიმალურს.
# ვერ გავიგე