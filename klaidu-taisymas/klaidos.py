
import os

def Viena_byla(byla):
    if not os.path.exists(byla):
        return None, [f"Byla {byla} nesurasta"]
    
    turinys = open(byla, 'r', encoding='utf-8').read().split()
    skaiciai = list(filter(lambda x: x.lstrip('-').isdigit(), turinys))
    neskaiciai = list(filter(lambda x: not x.lstrip('-').isdigit(), turinys))
    
    klaidos = [f"Byla {byla} elementas ‘{elementas}‘ nėra sveikasis skaičius" for elementas in neskaiciai]
    skaiciai = list(map(int, skaiciai))
    
    return {
        
        "suma": sum(skaiciai),
        "kiekis": len(skaiciai),
        "min": (min(skaiciai), skaiciai.count(min(skaiciai))) if skaiciai else (None, 0),
        "max": (max(skaiciai), skaiciai.count(max(skaiciai))) if skaiciai else (None, 0)
    
    }, klaidos

def Visos_bylos():
    rezultatai, klaidos = zip(*(Viena_byla(f"duom{i}.txt") for i in range(1, 11)))
    rezultatai = [r for r in rezultatai if r]
    klaidos = sum(klaidos, [])
    
    suma = sum(r["suma"] for r in rezultatai)
    kiekis = sum(r["kiekis"] for r in rezultatai)
    
    min_reiksme, min_kiekis = min((r["min"] for r in rezultatai if r["min"][0] is not None), default=(None, 0))
    max_reiksme, max_kiekis = max((r["max"] for r in rezultatai if r["max"][0] is not None), default=(None, 0))
    
    open("rez.txt", 'w', encoding='utf-8').write(
        f"Suma: {suma}\nKiekis: {kiekis}\n" +
        (f"Max: {max_reiksme}, Max_kiekis: {max_kiekis}\nMin: {min_reiksme}, Min_kiekis: {min_kiekis}\n" if kiekis else "")
    )
    open("klaidos.txt", 'w', encoding='utf-8').write("\n".join(klaidos) + "\n" if klaidos else "")

Visos_bylos()