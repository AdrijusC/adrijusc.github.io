1.
def kalimas(n, k):
    smugiai = (n + k - 1)

    for i in range(1, smugiai + 1):
        likes = n - (i - 1) * k
        if likes > 0:
            print(f"Kirtis {i}: Tuk! {likes} cm liko.")
        else:
            break

    print("Vinis ikaltas")

kalimas(20, 7)

2.
def surastiSkaicius():
    suma = 0
    for sk in range(1000, 10000):
        kaire = sk // 100
        desine = sk % 100

        if (kaire + desine) ** 2 == sk:
            print(f"Surastas skaicius: {sk}")
            suma += 1
    
    print(f"Siu skaiciu yra {suma}")

surastiSkaicius()
3.
def simpatetiskoSuma(n):
    vsuma = 0
    dbrskaicius = 0

    for i in range(n):
        dbrskaicius = dbrskaicius * 10 + 7
        vsuma += dbrskaicius

    return vsuma

n = int(input("Iveskite praeitus septynetus:"))
rezultatas = simpatetiskoSuma(n)
print("Suma yra:", rezultatas)

7.
def kedes(n,k):
    sum = 0
    for i in range(n):
        sum += k + i * 2
    return sum

kedSk = kedes(3,8)
print(f"is viso reik uzsakyt {kedSk} kedziu")

9.
def visoskknygoj(pskpsl):
    visoSk = 0

    visoSk += 9 * 1

    visoSk += (99 - 10 + 1) * 2

    visoSk += (pskpsl - 100 + 1) * 3

    return visoSk

pskpsl = 710
visoSk = visoskknygoj(pskpsl)
print(f"Is viso reikia tiek skaitmenu {visoSk}")