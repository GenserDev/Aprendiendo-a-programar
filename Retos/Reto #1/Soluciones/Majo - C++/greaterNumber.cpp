#include <iostream>
using namespace std;

int num1, num2, num3;
int numbers[3];
int largest = numbers[0];

int compareNumbers(int num1, int num2, int num3) {
    for (int i = 0; i < 3; i++){
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

int main() {
    cout << "\nIngresa tus tres numeros: " << endl;
    cin >> num1;
    numbers[0] = num1;
    cin >> num2;
    numbers[1] = num2;
    cin >> num3;
    numbers[2] = num3;
    int largest = compareNumbers(num1, num2, num3);
    cout << "\n El mas grande es: " << largest;
    return 0;
}
