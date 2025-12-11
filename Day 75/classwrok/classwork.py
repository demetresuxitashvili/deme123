# 1) შექმენით manual_swapcase ფუნქცია დღეს ნასწავლი მეთოდების გამოყენებით.
def manual_swapcase(num):
    if num == num.lower():
        return num.upper()
    else:
        return num.lower()

print(manual_swapcase('blabla'))

# 2) ჩამოწერეთ გაკვეთილზე ახსნილი სამივე ფუნქცია და მიუწერეთ განმარტებები
# ჩვენ ვისწავლეთ isupper, islower, swapcase:
# isupper აბრუნებს ბულეან მნიშვნელობას მაგალითად თუ რამე upper-ია და isupper-ს გავუწერთ True და სხვა შემთხვევაში False იგივეა islower-ც swapcase-კი საპირისპიროს აბრუნებს 