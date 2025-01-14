
def skaityti(failas):
    with open(failas, 'r', encoding='utf-8') as f:
        linijos = f.readlines()
    
    
    gr = int(linijos[0].strip())
    ind = 1
    duom = {}


    for i in range(gr):
        grp_dydis = int(linijos[ind].strip())
        ind += 1
        grupe = []
        
        for _ in range(grp_dydis):
            eil = linijos[ind].strip()
            vard = eil[:20].strip()
            rez = eil[20:].strip()
            min, sek = map(int, rez.split())
            visas_sek = min * 60 + sek 
            grupe.append((vard, visas_sek, rez))
            ind += 1
        
        duom[f'Gr_{i+1}'] = grupe
    
    return duom

def procesint(duom):

    atrinkti = []
    
    for grupe_pav, begikai in duom.items():
        begikai.sort(key=lambda x: x[1])
        kiek_atrinkti = len(begikai) // 2
        atrinkti.extend(begikai[:kiek_atrinkti])
    
    atrinkti.sort(key=lambda x: x[1])
    return atrinkti

def rasyti(failas, atrinkti):
    with open(failas, 'w', encoding='utf-8') as f:
        for begikas in atrinkti:
            vard, _, rez = begikas
            f.write(f"{vard:20} {rez}\n")

def pagr():

    failas_ived = 'duom1.txt'
    failas_rez = 'rez.txt'
    
    duom = skaityti(failas_ived)
    atrinkti = procesint(duom)
    rasyti(failas_rez, atrinkti)

if __name__ == "__main__":
    pagr()