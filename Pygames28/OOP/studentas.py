
class Studentas:
    def __init__(self, vardas, pazymiai):
        self.vardas = vardas
        self.pazymiai = pazymiai

    @property
    def vardas(self):
        return self._vardas

    @vardas.setter
    def vardas(self, vardas):
        if not vardas or not isinstance(vardas, str):
            raise ValueError("Vardas turi būti ne tuščias ir būti string tipo.")
        self._vardas = vardas

    @property
    def pazymiai(self):
        return self._pazymiai

    @pazymiai.setter
    def pazymiai(self, pazymiai):
        if not isinstance(pazymiai, list):
            raise ValueError("Pazymiai turi būti sąrašas.")
        for pazymys in pazymiai:
            if not self.ar_pazymys_teisingas(pazymys):
                raise ValueError("Pazymys turi buti nuo 1 iki 10.")
        self._pazymiai = pazymiai

    @staticmethod
    def ar_pazymys_teisingas(pazymys):
        return 1 <= pazymys <= 10

    def vidurkis(self):
        if not self.pazymiai:
            return 0
        return sum(self.pazymiai) / len(self.pazymiai)

studentas = Studentas("Jonas", [8, 9, 7])
print(studentas.vardas)
print(studentas.vidurkis())

try:
    studentas.pazymiai = [10, 9, 11]
except ValueError as e:
    print(e)