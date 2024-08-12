#include <iostream>
using namespace std;

// Función que le pide al usuario ingresar sus números.
int askUserForNumbers() {
    int num1;
    int num2;

    cout << "\nIngresa un numero: ";
    cin >> num1;
    cout << "\nIngresa el segundo numero: ";
    cin >> num2;

    cout << "\nEl numero es: ";
    return num1 + num2;
}

// Función principal.
int main () {
    cout << askUserForNumbers();
    return 0;
}
