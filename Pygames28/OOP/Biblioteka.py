
class Knyga:
    def __init__(self, pavadinimas: str, autorius: str, puslapiu_skaicius: int):
        self.pavadinimas = pavadinimas
        self.autorius = autorius
        self.puslapiu_skaicius = puslapiu_skaicius

    def __str__(self):
        return f"Knyga: {self.pavadinimas}, Autorius: {self.autorius}, Puslapių: {self.puslapiu_skaicius}"
    

class Biblioteka:
    def __init__(self):
        self._knygos = []

    @property
    def knygos(self):
        return self._knygos

    @knygos.setter
    def knygos(self, naujos_knygos):
        if not all(isinstance(knyga, Knyga) for knyga in naujos_knygos):
            raise ValueError("Visi objektai sąraše turi būti Knyga tipo.")
        self._knygos = naujos_knygos

    def prideti_knyga(self, knyga):
        if not self.ar_knyga_teisinga(knyga):
            raise ValueError("Pridedamas objektas turi būti Knyga tipo.")
        self._knygos.append(knyga)

    def pasalinti_knyga(self, pavadinimas):
        for knyga in self._knygos:
            if knyga.pavadinimas.lower() == pavadinimas.lower():
                self._knygos.remove(knyga)
                return True
        return False

    def rasti_knyga(self, pavadinimas):
        for knyga in self._knygos:
            if knyga.pavadinimas.lower() == pavadinimas.lower():
                return knyga
        return None

    def vidutinis_puslapiu_skaicius(self):
        if not self._knygos:
            return 0 
        return sum(knyga.puslapiu_skaicius for knyga in self._knygos) / len(self._knygos)

    @staticmethod
    def ar_knyga_teisinga(obj):
        return isinstance(obj, Knyga)


biblioteka = Biblioteka()
biblioteka.prideti_knyga(Knyga("Haris Poteris", "J.K. Rowling", 300))
biblioteka.prideti_knyga(Knyga("LoTR", "J.R.R Tolkien", 500))

print(biblioteka.vidutinis_puslapiu_skaicius())

biblioteka.pasalinti_knyga("LoTR")

knyga = biblioteka.rasti_knyga("Haris Poteris")
print(knyga)

