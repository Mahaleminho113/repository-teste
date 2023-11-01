# array = ['jaja','tata', 'toto']
# for el in array:
#     print(el)


# insert = input('qual o seu nome?')
# print(insert + ' biba')

# import random

# num = random.randint(0,100)
# print(num)
# palpite = None

# while num != palpite:
#     palpite = int(input("qual e o numero?"))

#     if num == palpite:
#         print('voce acertou!')
#     elif palpite < num:
#         print('o numero e maior!')
#     else:
#         print('o numero e menor!')

# frase = input('Insira sua frase.')
# count = 0
# for letra in frase:
#     if letra == 'a':
#         count += 1
# print(count)


# obj = {
#     'tata': 'popo',
#     'nome': 'hideki'
# }
# print(obj['nome'])

# email = input("qual seu email ?")


# if email.count("@") == 1 :
#     print("VALIDO")
# else:
#     print("INVALIDO")

# print(email.split("@"))

# if email.split("@")[0]=="":
#     print("invalido")
# else:
#     print("valido")

# for letra in email:
#     if letra == "@":
#         print("Email valido!")
#     else:
#         print("Email Invalido!")

# print(email.split("@")[1].split("."))
# if email.split("@")[1].split(".")[0]=="@":
#     print("Email Invalido!")
# else

# valid = True

# if email.count(" ") != 0 and email.count('@') == 1 and email.split('@')[0] != '' and email.split("@")[1].count(".") > 0:
#     for item in email.split('@')[1].split('.'):
#         if item == '' or item == ' ':
#             valid = False
# else:
#     valid = False
# print(valid)


# matheus@.com.br


# import re


# def isValidEmail(email):
#     pat = "^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[a-z]{1,3}$"
#     if re.match(pat, email):
#         print('Email Valid 👍')
#     else:
#         print('Email NOT Valid 👎')


# isValidEmail('hidekiprado@hotmail.com')


# def retirarDuplicados(numbers):

#     numbersNovo = []
#     for numero in numbers:
#         if numbersNovo.count(numero) == 0:
#             numbersNovo.append(numero)

#     print(numbersNovo)


# retirarDuplicados([1, 2, 1, 4, 1, 6, 7, 1, 9])


# def retornarOsQueNaoRepetem(caixa):

#     caixaNova = []
#     for brinquedo in caixa:
#         if caixa.count(brinquedo) == 1:
#             caixaNova.append(brinquedo)
#     print(caixaNova)


# retornarOsQueNaoRepetem([1, 2, 1, 2, 1, 6, 7, 1, 9])

# def retornarDuplicados(caixa):
#     caixaNova = []
#     for brinquedo in caixa:
#         # if caixa.count(brinquedo) > 1 and caixaNova.count(brinquedo) == 0:
#         if caixa.count(brinquedo) > 1 and brinquedo not in caixaNova:
#             caixaNova.append(brinquedo)
#     print(caixaNova)


# retornarDuplicados([1, 2, 1, 2, 1, 6, 7, 1, 9])

# entrar na documentaçao e desenhar um quadrado
# https://docs.python.org/3/library/turtle.html
#

# desenhe um triangulo um quadrado cada um de cores radomicas
# desenhe linhas ramdomicas com cores ramdomicas.
# desenhe circulos randomicamente com cores randomicas
#


import turtle as t

# tata = t.Turtle()
# #
# tata.shape('turtle')
# # tata.forward(100)
# # tata.right(90)
# # tata.forward(100)
# tata.circle(100)

tato = t.Turtle()
tato.screen.delay(-1)
tato.shape('turtle')
# tato.forward(100)
tato.right(90)
tato.up()
tato.forward(100)
tato.left(90)
tato.down()
tato.circle(150)
tato.right(-90)
tato.up()
tato.forward(150)
tato.down()
for x in range(12):
    tato.circle(75)
    tato.right(50)
for x in range(24):
    tato.color("blue")
    tato.circle(73)
    tato.right(50)
for x in range(24):
    tato.color("red")
    tato.circle(70)
    tato.right(50)
for x in range(10):
    tato.color("gray")
    tato.circle(65)
    tato.right(50)
for x in range(1):
    tato.color("pink")
    tato.circle(60)
    tato.right(50)
    tato.color("black")


tato.up()
tato.home()
tato.right(90)
tato.forward(250)
tato.down()
tato.right(90)
tato.forward(100)
tato.right(90)
tato.forward(100)
tato.right(90)
tato.forward(100)
tato.right(90)
tato.forward(100)
tato.up()
tato.right(-90)
tato.forward(100)
tato.down()
tato.forward(100)
tato.left(120)
tato.forward(100)
tato.left(120)
tato.forward(100)

tato.up()
tato.home()

# for i in range(10):

#     tata.circle(100)
#     tata.right(30
#     tata.circle(80)
#     tata.right(30)

#

#
tela = t.Screen()
tela.exitonclick()
