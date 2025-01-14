
import glob

def nuskaityt(failai):

    vrd = set()
    for fail in failai:
        with open(fail, 'r', encoding='utf-8') as f:
            vrd.update(f.read().splitlines())
    return vrd

def skaiciuot_kieki(vrd, failai):

    skaic = {v: 0 for v in vrd}
    for fail in failai:
        with open(fail, 'r', encoding='utf-8') as f:
            for vard in f.read().splitlines():
                if vard in skaic:
                    skaic[vard] += 1
    return skaic

def kaina(skaic):

    kainos = {}
    for v, k in skaic.items():
        suma = 0
        for i in range(1, k + 1):
            if i <= 3:
                suma += 5
            elif i == 4:
                suma += 4
            elif i == 5:
                suma += 3
            elif i == 6:
                suma += 2
            else:
                suma += 1
        kainos[v] = (k, suma)
    return kainos

def rasyt_saras(fail, sarasas):

    with open(fail, 'w', encoding='utf-8') as f:
        for v, k in sarasas.items():
            f.write(f"{v} {k}\n")

def rasyt_sask(fail, kainos):

    with open(fail, 'w', encoding='utf-8') as f:
        for v, (k, s) in kainos.items():
            f.write(f"{v:20} {k} {s} EUR\n")

def prg():

    failai = glob.glob("12*.txt")
    vrd = nuskaityt(failai)

    sarasas = skaiciuot_kieki(vrd, failai)
    kainos = kaina(sarasas)

    sarasas_failas = "sarasas.txt"
    saskaita_failas = "saskaita.txt"

    rasyt_saras(sarasas_failas, sarasas)
    rasyt_sask(saskaita_failas, kainos) 

if __name__ == "__main__":
    prg()