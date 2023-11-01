import random
import turtle as t
tato = t.Turtle()
tato.shape("turtle")

# /modelo rgb 255
# t.colormode(255)


cores = ["blue", "red", "yellow", "pink", "gray"]

# /modelo rgb 255
# def coresRandomicas():
#     r = random.randint(0, 255)
#     g = random.randint(0, 255)
#     b = random.randint(0, 255)


def coresRandomicas():
    r = random.random()
    g = random.random()
    b = random.random()

    return (r, g, b)


# for x in range(3, 10):
#     tato.pencolor(coresRandomicas())
#     # tato.color(random.choice(cores))
#     for y in range(x):
#         tato.forward(100)
#         tato.right(360/x)
# tato.speed(0)
# array = [0, 90, 180, 270]
# for a in range(200):
#     tato.pensize(10)
#     tato.color(coresRandomicas())
#     tato.forward(20)
#     tato.setheading(random.choice(array))
tato.screen.delay(0)
for x in range(int(360/10)):
    tato.color(coresRandomicas())
    tato.circle(100)
    tato.right(10)


tela = t.Screen()
tela.exitonclick()
