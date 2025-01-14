def skaityt(failas):
    with open(failas, 'r', encoding='utf-8') as f:
        eil = f.readlines()

    n = int(eil[0].strip())
    start = {}
    i = 1
    for _ in range(n):
        lin = eil[i].strip()
        vard = lin[:20].strip()
        laikas = list(map(int, lin[20:].split()))
        start[vard] = laikas
        i += 1


    m = int(eil[i].strip())
    i += 1
    fin = {}
    for _ in range(m):
        lin = eil[i].strip()
        vard = lin[:20].strip()
        laikas = list(map(int, lin[20:].split()))
        fin[vard] = laikas
        i += 1

    return start, fin

def skaic_rez(start, fin):
    rez = []
    for vard, st in start.items():
        if vard in fin:
            fn = fin[vard]
            sug = (
                (fn[0] - st[0]) * 3600 +
                (fn[1] - st[1]) * 60 +
                (fn[2] - st[2])
            )
            min = sug // 60
            sek = sug % 60
            rez.append((vard, min, sek))
        else:
            pass
    return rez

def rikiuot(rez):

    return sorted(rez, key=lambda x: (x[1] * 60 + x[2], x[0]))

def rasyt(failas, rez):

    with open(failas, 'w', encoding='utf-8') as f:
        for vard, min, sek in rez:
            f.write(f"{vard:20} {min} {sek}\n")

def pagr():

    iv_f = "duom3.txt"
    iz_f = "rez.txt"

    start, fin = skaityt(iv_f)
    rez = skaic_rez(start, fin)
    sur = rikiuot(rez)
    rasyt(iz_f, sur)

if __name__ == "__main__":
    pagr()
