import random
import turtle as t
# formatos = ["arrow", "turtle", "blank", "classic",]
# format = random.choice(formatos)
tato = t.Turtle()
# tato.shape(random.choice(formatos))
tato.shape("turtle")
tato.screen.delay(50)
tato.speed(10)

cores = ["blue", "red", "pink", "yellow", "orange", "purple"]
direcoes = ["right", "left"]
graus = [90, 120, 45, 210, 180]
forward = [40, 60, 90, 100, 120]
tamanhoCaneta = [2, 3, 4, 5, 8]
direcao = random.choice(direcoes)
grau = random.choice(graus)
# print()
# print(random.choice(forward))

for x in range(10):
    tato.random.choice(direcoes)()
    tato.color(random.choice(cores))
    tato.pensize(random.choice(tamanhoCaneta))
    tato.left(random.choice(graus))
    tato.forward(random.choice(forward))
    tato.home()
    tato.right(random.choice(graus))


# cor = random.choice(cores)
# tato.pensize(5)

# tato.color(random.choice(cores))
# for step in range(3):
#     tato.forward(100)
#     tato.right(120)
# tato.color(random.choice(cores))
# for step in range(4):
#     tato.forward(100)
#     tato.right(90)
# tato.color(random.choice(cores))
# for step in range(5):
#     tato.forward(100)
#     tato.right(72)
# tato.color(random.choice(cores))
# for step in range(6):
#     tato.forward(100)
#     tato.right(60)
# tato.color(random.choice(cores))
# for step in range(7):
#     tato.forward(100)
#     tato.right(51)

# for x in range(27):

#     if (x > 1):
#         tato.color(random.choice(cores))
#     if x < 3:
#         tato.forward(100)
#         tato.right(120)
#     if (x > 3) and (x < 8):
#         tato.forward(100)
#         tato.right(90)
#     if (x > 8) and (x < 14):
#         tato.forward(100)
#         tato.right(72)
#     if (x > 13) and (x < 20):
#         tato.forward(100)
#         tato.right(60)
#     if (x > 19) and (x < 28):
#         tato.forward(100)
#         tato.right(51)
