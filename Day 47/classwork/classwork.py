# 1) შექმენით ფუნქცია სახელად - filter_positives, რომელიც არგუმენტად მიიღებს სიას, თქვენი მიზანი იქნება არგუმენტად გადაცემული სიიდან მხოლოდ დადებითი რიცხვები დააბრუნოთ.
def filter_positives(lists):
    lists2 = []
    for i in lists:
        if i > 0:
            lists2.append(i)
    return lists2
print(filter_positives([22, 55, -5, 2 , -24, -23]))
# 2) შექმენით ფუნქცია, სახელად - filter_negatives. ფუნქციას არგუმენტად სია უნდა გადასცეთ. მან კი პასუხად მხოლოდ უარყოფითი რიცხვები უნდა დააბრუნოს.
def filter_negatives(lists):
    x = []
    for i in lists:
        if i < 0:
            x.append(i)
    return x

num_lists = [23, -1, 32, 45, -2, -5, 13, -15, 12, 100, 14124]
print(filter_negatives(num_lists))

# 3) დაწერეთ ფუნქცია, რომელსაც გადაეცემა პარამეტრი - სახელი. ფუნქციის მიზანი იქნება ნებისმიერი სახელი გადაიყვანოს Uppercase ასოებად.    
