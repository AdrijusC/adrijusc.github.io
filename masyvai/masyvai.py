import random
import json

def generuoti_masyva():
    n = random.randint(10, 30)
    m = random.randint(10, 30)
    masyvas = [[random.randint(-100, 100) for _ in range(m)] for _ in range(n)]
    return masyvas

def issaugoti_masyva_faile(masyvas, failo_pavadinimas="masyvas.json"):
    with open(failo_pavadinimas, "w") as failas:
        json.dump(masyvas, failas)

def ikelti_masyva_is_failo(failo_pavadinimas="masyvas.json"):
    with open(failo_pavadinimas, "r") as failas:
        return json.load(failas)

def rasti_skaiciu_masyve(masyvas, skaicius):
    pozicijos = []
    for i, eilute in enumerate(masyvas):
        for j, reiksme in enumerate(eilute):
            if reiksme == skaicius:
                pozicijos.append((i, j))
    return pozicijos

masyvas = generuoti_masyva()

issaugoti_masyva_faile(masyvas)

sk = random.randint(-100, 100)

pozicijos = rasti_skaiciu_masyve(masyvas, sk)

print(f"Sugeneruotas skaicius: {sk}")
if pozicijos:
    print("Skaicius rastas siose vietose (eilute, stulpelis):")
    for pozicija in pozicijos:
        print(pozicija)
else:
    print("Skaicius nerastas masyve.")
