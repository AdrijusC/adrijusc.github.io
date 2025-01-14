
def skaityt(failas):

    mok = []
    with open(failas, 'r', encoding='utf-8') as f:
        for eil in f:
            vard, vid = eil.rsplit(maxsplit=1)
            mok.append((vard, float(vid)))
    return mok

def vidurkis(mok):

    suma = sum(m[1] for m in mok)
    return suma / len(mok)

def salint(mok, vid):

    return [m for m in mok if m[1] >= vid]

def rikiuot(mok):

    return sorted(mok, key=lambda x: -x[1])

def geriausi(gr_mok):

    visi = [m for gr in gr_mok for m in gr]
    vis_vid = vidurkis(visi)
    return [m for m in visi if m[1] > vis_vid]

def rasyt(failas, gr_rez, ger):

    with open(failas, 'w', encoding='utf-8') as f:

        for i, gr in enumerate(gr_rez, start=1):
            f.write(f"Klasė {i}:\n")
            for v, vid in gr:
                f.write(f"{v} {vid:.2f}\n")
            f.write("\n")
            
        f.write("Rezultatas:\n")
        for v, vid in rikiuot(ger):
            f.write(f"{v} {vid:.2f}\n")

def prg():

    failai = ["duom3_1.txt", "duom3_2.txt", "duom3_3.txt", "duom3_4.txt"]
    rez_failas = "rez3.txt"

    gr_rez = []
    for failas in failai:
        mok = skaityt(failas)
        vid = vidurkis(mok)
        atrinkti = salint(mok, vid)
        gr_rez.append(rikiuot(atrinkti))

    ger = geriausi(gr_rez)
    rasyt(rez_failas, gr_rez, ger)

if __name__ == "__main__":
    prg()
