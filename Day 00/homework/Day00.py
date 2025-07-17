from turtle import *


#we want to paint house

#step 1: draw a square
speed(30)
width(7)
color("blue")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
end_fill()




#drawing a door

forward(70)
color("yellow")
begin_fill()
left(90)
forward(120)   #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
penup()

penup()
color("black")
begin_fill()
goto(150, 180)
right(500)
pendown()
right(100)
forward(30)
right(90)
forward(40)
right(90)
forward(30)
right(90)
forward(40)
right(90)
forward(30)
end_fill()

penup()
goto(50, 140)
pendown()

forward(5)
begin_fill()
left(90)
forward(40)
left(90)
forward(30)
left(90)
forward(40)
left(90)
forward(25)
forward(5)
end_fill()









exitonclick()