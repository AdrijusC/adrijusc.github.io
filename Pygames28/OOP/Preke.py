class Preke:
    def __init__(self, pavadinimas, kaina, kiekis):
        self.pavadinimas = pavadinimas
        self.kaina = kaina
        self.kiekis = kiekis

    @property
    def pavadinimas(self):
        return self._pavadinimas

    @pavadinimas.setter
    def pavadinimas(self, pavadinimas):
        if not pavadinimas:
            raise ValueError("Pavadinimas negali būti tuščias.")
        self._pavadinimas = pavadinimas

    @property
    def kaina(self):
        return self._kaina

    @kaina.setter
    def kaina(self, kaina):
        if kaina < 0:
            raise ValueError("Kaina negali būti neigiama.")
        self._kaina = kaina

    @property
    def kiekis(self):
        return self._kiekis

    @kiekis.setter
    def kiekis(self, kiekis):
        if kiekis < 0:
            raise ValueError("Kiekis negali būti neigiamas.")
        self._kiekis = kiekis

    @staticmethod
    def ar_kaina_teisinga(kaina):
        return kaina >= 0

    def bendra_kaina(self):
        return self.kaina * self.kiekis


preke = Preke("Obuolys", 0.50, 10)
print(preke.pavadinimas) 
print(preke.bendra_kaina()) 

try:
    preke.kaina = -1
except ValueError as e:
    print(e)

try:
    preke = Preke("", 1.0, 5)
except ValueError as e:
    print(e)

try:
    preke.kiekis = -5
except ValueError as e:
    print(e)

print(Preke.ar_kaina_teisinga(10))
print(Preke.ar_kaina_teisinga(-1))