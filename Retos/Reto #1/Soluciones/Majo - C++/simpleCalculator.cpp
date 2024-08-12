#include <iostream>
using namespace std;

int main() {
    int userOperation;
    float num1; 
    float num2;

    cout << "Ingresa tu primer numero: ";
    cin >> num1;
    cout << "Ingresa tu segundo numero: ";
    cin >> num2;
    cout << "¿Que quieres hacer con estos numeros? \n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n";
    cin >> userOperation;

    switch (userOperation)
    {
    case 1:
        cout << "El resultado es: " << num1 + num2 << endl;
        break;
    case 2:
        cout << "El resultado es: " << num1 - num2 << endl;
        break;
    case 3:
        cout << "El resultado es: " << num1 * num2 << endl;
        break;
    case 4:
        if (num2 != 0)
            cout << "El resultado es: " << num1 / num2 << endl;
        else
            cout << "Error: Division por cero no permitida." << endl;
        break;
    default:
        cout << "Operacion no valida." << endl;
        break;
    }

    return 0;
}
