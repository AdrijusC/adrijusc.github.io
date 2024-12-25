def sk_žodžiais(e_centai):
    def e_žodžiais(e):
        vnt = ["", "vienas", "du", "trys", "keturi", "penki", "šeši", "septyni", "aštuoni", "devyni"]
        deš = ["", "dešimt", "dvidešimt", "trisdešimt", "keturiasdešimt", "penkiasdešimt", "šešiasdešimt", "septyniasdešimt", "aštuoniasdešimt", "devyniasdešimt"]
        tūkst = ["", "tūkstantis", "tūkstančiai", "tūkstančiu"]

        def maž_tūkst(n):
            if n < 10:
                return vnt[n]
            elif n < 100:
                return deš[n // 10] + (" " + vnt[n % 10] if n % 10 != 0 else "")
            else:
                return vnt[n // 100] + " šimtas" + (" " + maž_tūkst(n % 100) if n % 100 != 0 else "")

        if e == 0:
            return "nulis eurų"

        žod = ""
        if e >= 1000:
            tūkst_dalis = e // 1000
            žod += maž_tūkst(tūkst_dalis) + " "
            if tūkst_dalis == 1:
                žod += tūkst[1]
            elif 2 <= tūkst_dalis % 10 <= 9 and not (11 <= tūkst_dalis % 100 <= 19):
                žod += tūkst[2]
            else:
                žod += tūkst[3]
            e %= 1000

        if e > 0:
            žod += (" " if žod else "") + maž_tūkst(e)
        return žod + " eurai"

    try:
        e, c = map(int, e_centai.split('.'))
        e_dalis = e_žodžiais(e)
        c_dalis = f"{c} centas" if c == 1 else f"{c} centai"
        return f"{e_dalis} {c_dalis}".capitalize()
    except ValueError:
        return "Neteisinga pinigu suma"

if __name__ == "__main__":
    while True:
        įvestis = input("Iveskite pinigu suma ")
        if įvestis.lower() == 'exit':
            break
        print(sk_žodžiais(įvestis))