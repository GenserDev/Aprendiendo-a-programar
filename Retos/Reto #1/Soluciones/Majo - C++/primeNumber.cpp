#include <iostream>
using namespace std;

void isItPrime(int userNumber) {
    if (userNumber <= 1) {
        cout << "No es primo";
        return;
    }

    for(int i = 2; i <= userNumber/2; i++) {
        if (userNumber % i == 0) {
            cout << "No es primo";
            return;
        }
    }
    cout << "Es primo";
}

int main() {
    int userNumber;
    cout << "Ingresa un numero: ";
    cin >> userNumber;
    isItPrime(userNumber);
}
