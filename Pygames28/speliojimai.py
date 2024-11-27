import random

def speliojimas():

    zaidimu_skc = 0 

    while True:
        try:
            n = int(input("Įveskite sveiką teigiamą skaičių n (pvz., 100): "))
            if n <= 0:
                print("Įveskite teigiamą skaičių")
                continue
        except ValueError:
            print("Įveskite sveiką teigiamą skaičių.")
            continue

        zaidimu_skc += 1
        rndm_skc = random.randint(1, n)
        kiek_speta = 0
        istorija = [f"Vartotojas įvedė skaičių {n}",
                            f"Sugeneruotas skaičius {rndm_skc}"]

        print("Sugeneruotas skaičius. Bandykite atspėti")

        while True:
            try:
                spejimas = input("Įveskite spėjimą: ")
                if not spejimas.isdigit() or int(spejimas) <= 0:
                    print("Įveskite teigiamą skaičių")
                    continue
                spejimas = int(spejimas)
                kiek_speta += 1

                if spejimas > rndm_skc:
                    print("Skaičius mažesnis")
                    istorija.append(f"{kiek_speta} spėjimu vartotojas įvedė {spejimas}. Atsakymas – sugeneruotas skaičius mažesnis.")
                elif spejimas < rndm_skc:
                    print("Skaičius didesnis")
                    istorija.append(f"{kiek_speta} spėjimu vartotojas įvedė {spejimas}. Atsakymas – sugeneruotas skaičius didesnis.")
                else:
                    print(f" Atspėjote skaičių {rndm_skc} per {kiek_speta} spėjimus.")
                    istorija.append(f"{kiek_speta} spėjimu vartotojas atspėjo skaičių")
                    break
            except ValueError:
                print("Netinkama įvesta. Bandykite dar kartą.")

        with open("reg.txt", "a", encoding="utf-8") as failas:
            failas.write("\n".join(istorija) + "\n")
            failas.write("------------\n")

        zaisti_dar = input("Žaisti dar kartą? (taip/ne): ").strip().lower()
        if zaisti_dar != 'taip':
            print(f"Žaidėte {zaidimu_skc} kartą(us)")
            break

if __name__ == "__main__":
    speliojimas()