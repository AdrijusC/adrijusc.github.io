
def pasukt_sarasa(sarasas):
    pasukt = [[0] * len(sarasas) for _ in range(len(sarasas))]
    for i in range(len(sarasas)):
        for j in range(len(sarasas)):
            pasukt[j][len(sarasas) - 1 - i] = sarasas[i][j]
    return pasukt

sarasas = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

pasukt_sarasa = pasukt_sarasa(sarasas)
for row in pasukt_sarasa:
    print(row)