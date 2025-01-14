
def skaityt(failas):
    prat = {}
    with open(failas, 'r', encoding='utf-8') as f:
        for eil in f:
            try:
                pavad, kart = eil.rsplit(maxsplit=1)
                kart = int(kart)
                if pavad in prat:
                    prat[pavad] += kart
                else:
                    prat[pavad] = kart
            except:
                pass
    return prat


def rikiuot(prat):

    return sorted(prat.items(), key=lambda x: (-x[1], x[0]))


def rasyt(failas, prat):

    with open(failas, 'w', encoding='utf-8') as f:
        for pavad, kart in prat:
            f.write(f"{pavad:20} {kart}\n")

def pagr():

    iv_f = "duom2.txt"
    iz_f = "rez.txt" 

    prat = skaityt(iv_f)
    rikiuoti = rikiuot(prat)
    rasyt(iz_f, rikiuoti)

if __name__ == "__main__":
    pagr()