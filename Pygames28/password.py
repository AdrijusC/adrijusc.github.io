def sl_tikr(sl):
    klaidos = []

    if len(sl) < 12:
        klaidos.append("Turi būti bent 12 simbolių")

    if sum(1 for c in sl if c.isupper()) < 2:
        klaidos.append("Turi turėti bent 2 didžiąsias raides")

    if sum(1 for c in sl if c.islower()) < 2:
        klaidos.append("Turi turėti bent 2 mažąsias raides")

    if sum(1 for c in sl if c.isdigit()) < 2:
        klaidos.append("Turi turėti bent 2 skaičius")

    if sum(1 for c in sl if c in "!@#$%^&*(),.?\":{}|<>") < 2:
        klaidos.append("Turi turėti bent 2 spec. simbolius")

    if klaidos:
        return "Neteisingas " + " ".join(klaidos)
    return "Tinkamas"

def tikrinti_is_failo(failo_kelias):
    try:
        with open(failo_kelias, 'r', encoding='utf-8') as failas:
            slaptažodžiai = failas.readlines()

        rezultatai = {}
        for i, sl in enumerate(slaptažodžiai, start=1):
            sl = sl.strip()
            rezultatai[f"Eilutė {i}"] = sl_tikr(sl)

        return rezultatai
    except FileNotFoundError:
        return "Nurodytas failas nerastas"

if __name__ == "__main__":
    failo_kelias = input("Įveskite failo kelią su slaptažodžiais ")
    rezultatai = tikrinti_is_failo(failo_kelias)

    if isinstance(rezultatai, dict):
        for eil, rez in rezultatai.items():
            print(f"{eil}: {rez}")
    else:
        print(rezultatai)
