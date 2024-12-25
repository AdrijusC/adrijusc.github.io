def atbash_sifras(tekstas):
    mazosios = "aąbcčdeęėfghiįyjklmnoprsštuųūvzž"
    didziosios = "AĄBCČDEĘĖFGHIĮYJKLMNOPRSŠTUŲŪVZŽ"
    uzkoduotas = []

    for simbolis in tekstas:
        if simbolis in mazosios:
            uzkoduotas.append(mazosios[::-1][mazosios.index(simbolis)])
        elif simbolis in didziosios:
            uzkoduotas.append(didziosios[::-1][didziosios.index(simbolis)])
        else:
            uzkoduotas.append(simbolis)

    return ''.join(uzkoduotas)

def uzkoduoti_faila(ivedimo_failas, isvedimo_failas):
    try:
        with open(ivedimo_failas, 'r', encoding='utf-8') as duom:
            eilutes = duom.readlines()

        su_sifruotu = [atbash_sifras(eilute.strip()) for eilute in eilutes]

        with open(isvedimo_failas, 'w', encoding='utf-8') as rez:
            rez.write('\n'.join(su_sifruotu))

        print(f"Failas užkoduotas į '{isvedimo_failas}'.")
    except FileNotFoundError:
        print(f"Failas '{ivedimo_failas}' nerastas")
    except Exception as e:
        print(f"Įvyko klaida: {e}")

if __name__ == "__main__":
    ivedimo_failas = input("Įveskite koduojamo failo pavadinimą ")
    isvedimo_failas = input("Įveskite failą kur bus išvedama ")
    uzkoduoti_faila(ivedimo_failas, isvedimo_failas)
