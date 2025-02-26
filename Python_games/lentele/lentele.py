
def pasukt_lentele(lentele):
    pasukt = [[0] * len(lentele) for _ in range(len(lentele))]
    for i in range(len(lentele)):
        for j in range(len(lentele)):
            pasukt[j][len(lentele) - 1 - i] = lentele[i][j]
    return pasukt

lentele = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

pasukt_lentele = pasukt_lentele(lentele)
for row in pasukt_lentele:
    print(row)