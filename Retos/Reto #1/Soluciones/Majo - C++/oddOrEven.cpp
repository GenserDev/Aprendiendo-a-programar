#include <iostream>
using namespace std;

void oddOrEven(int userNumber) {
    if(userNumber % 2 == 0){
        cout << userNumber << " es un numero par.";
    } else {
        cout << userNumber << " es un numero impar.";
    }
}

int main() {
    int userNumber;
    cout << "Ingresa un numero: ";
    cin >> userNumber;
    oddOrEven(userNumber);
    return 0;
}
