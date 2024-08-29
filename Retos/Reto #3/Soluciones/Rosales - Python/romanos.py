class App():
    def __init__(self):
        self.dicc_romanos = {"I":1, "V":5, "X":10, "L":50, "C":100, "D": 500, "M":1000}
        romano = input("Ingrese el número romano: ")
        print(self.romano_dec(romano))
        
    
    def romano_dec(self,romano):
        decimal = 0
        for n in range(len(romano)-1,-1,-1):
            if  (n-1) >-1 and self.dicc_romanos[romano[n]] > self.dicc_romanos[romano[n-1]]:
                decimal += self.dicc_romanos[romano[n]]-self.dicc_romanos[romano[n-1]]-self.dicc_romanos[romano[n-1]]
            else:
                decimal+=(self.dicc_romanos.get(romano[n]))
        return decimal

if __name__ == "__main__":
    app = App()

