1.
def kavosMasina():
    kaina = float(input("Iveskite kavos kaina:"))
    likutis = kaina
    blogosMonetos = 0
    gerosMonetos = 0

    leistinosMonetos = [0.10, 0.20, 0.50, 1.0, 2.0]

    while likutis > 0:
        moneta = input("Imeskite moneta:")

        if moneta in ["10", "20", "50"]:
            moneta = float(moneta) / 100
        else:
            try:
                moneta = float(moneta)
            except ValueError:
                print("Neteisinga moneta, meskite dar karta")
                blogosMonetos += 1
                continue
    
        if moneta in leistinosMonetos:
            gerosMonetos += 1
            likutis -= moneta
            if likutis > 0:
                print(f"{float(likutis)} euru liko sumoketi")
            else:
                grazinimas = abs(likutis)
                if grazinimas > 0:
                    print(f"Graziname: {float(grazinimas)} euru")
                print("Skanios kavos")
        else:
            blogosMonetos += 1
            print("Bloga moneta. Meskite dar karta")
        
    print(f"Geru monetu bandymu:{gerosMonetos}")
    print(f"Blogu monetu bandymu:{blogosMonetos}")
        

kavosMasina()

2.
def spauspdintiZvaigzdutes(skaicius):
    skaiciuStr = str(skaicius)

    for sk in skaiciuStr:
        print('*' * int(sk))

skaicius = int(input("Iveskite skaiciu: "))
spauspdintiZvaigzdutes(skaicius)