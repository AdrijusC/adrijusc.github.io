import random

def lazdos():
    print("Sveiki atvykę į žaidimą")
    zaidimu_skaicius = 0

    while True:
        pirmas = input("Įveskite pirmojo žaidėjo vardą: ").strip()
        antras = input("Įveskite antrojo žaidėjo vardą: ").strip()

        try:
            prad_lazd = int(input("Įveskite lazdelių skaičių (pvz., 10): "))
            if prad_lazd <= 0:
                print("Lazdelių skaičius turi būti teigiamas")
                continue
        except ValueError:
            print("Neteisingai. Įveskite teigiamą skaičių")
            continue

        zaidimu_skaicius += 1

        dbr_zaidejas = random.choice([pirmas, antras])
        print(f"Žaidimą pradeda {dbr_zaidejas}!")
        istorija = [
            f"Žaidėjų vardai: {pirmas} ir {antras}",
            f"Lazdelių pasirinktas skaičius: {prad_lazd}",
            f"Žaidimą pradeda {dbr_zaidejas}",
        ]

        lik_lazd = prad_lazd

        while lik_lazd > 0:
            print(f"\n{dbr_zaidejas} ėjimas. Liko {lik_lazd} lazdelės")
            try:
                paimta = int(input("Kiek lazdelių paimsite ? 1-3 "))
                if paimta < 1 or paimta > 3:
                    print("Galima paimti nuo 1 iki 3 lazdelių.")
                    continue
                if paimta > lik_lazd:
                    print(f"Negalima paimti daugiau nei ({lik_lazd})")
                    continue
            except ValueError:
                print("Įveskite skaičių nuo 1 iki 3")
                continue

            lik_lazd -= paimta
            istorija.append(f"{dbr_zaidejas} paima {paimta} lazdelę(-es). Liko {lik_lazd}")

            if lik_lazd == 0:
                laimetojas = pirmas if dbr_zaidejas == antras else antras
                print(f"Žaidimą laimėjo {laimetojas}")
                istorija.append(f"Žaidimą laimėjo {laimetojas}")
                break

            dbr_zaidejas = pirmas if dbr_zaidejas == antras else antras

        with open("reg.txt", "a", encoding="utf-8") as failas:
            failas.write("\n".join(istorija) + "\n")
            failas.write("------------\n")

        zaisti_dar = input("\nAr norite žaisti dar kartą? (taip/ne): ").strip().lower()
        if zaisti_dar != 'taip':
            print(f"Žaidimą žaidėte {zaidimu_skaicius} kartą(us)")
            break

if __name__ == "__main__":
    lazdos()