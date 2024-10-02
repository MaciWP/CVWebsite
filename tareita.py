from datetime import datetime
from math import trunc

def calculate_age() -> None:
    current_year = datetime.now().year
    while True:
        try:
            birth_year = int(input("Please enter your year of birth: "))
            age = current_year - birth_year
            print(f"You are {age} years old.")
            break

        except ValueError:
            print("Invalid input.")

#calculate_age()

def get_product_price() -> float:
    while True:
        try:
            price = float(input("Please enter the product price: "))
            trunc(price)
            if price < 0:
                print("The price cannot be negative. Please enter a valid price.")
            else:
                print(f"The entered product price is: {price:.2f}€")
                return price

        except ValueError:
            print("Invalid input. Please enter a valid price.")
#get_product_price()



""" print("----ejecicio 1----")
print("\n")
print("Hola Mundo")
print("\n")
print("----ejecicio 2----")
print("\n")
hola_mundo="¡Hola Mundo!"
print (hola_mundo)
print("\n")
print("----ejecicio 3----")
print("\n")
nombre=input("Introduce un nombre: ")
print ("¡Hola",nombre,"!")
print("\n")"""

print("----ejecicio 4----")
resultado= ((3 + 2) / 2.5) ** 2
print("Resultado operacion:",resultado)

print("\n")
print("----ejecicio 5----")
print("Introduce las horas trabajadas:")
horas=int(input())
print("Introduce el precio de las horas:")
precio=float(input())
cantida_a_pagar = horas*precio
print("Canidad a pagar:",cantida_a_pagar)

print("\n")



print("----ejecicio 6----")
n=int(input("Intruduce un entero"))


print("----ejecicio 6----")
n=int(input("Intruduce un entero"))

#ejecicio 4
#ejecicio 5
#ejecicio 6
#ejecicio 7
#ejecicio 8
#ejecicio 9
#ejecicio 12