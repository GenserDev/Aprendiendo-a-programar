//Pasos previos para ejecutar el programa
//Instalar node.js desde tu navegador
//Poner el siguiente comando en la terminal: npm install prompt-sync

//Pasos para correr el programa
//Para correr el programa usar el comando " node main.js " en la terminal

const prompt = require('prompt-sync')(); //Se utiliza ya que prompt no esta de forma nativa en Node.js 

function HolaMundo(){
    console.log("Hola mundo!!!")
}

function Suma(a, b){
    const suma = a + b
    console.log("El resultado de la suma es: " + suma )
}

function ParImpar(a){
    if (a % 2 == 0) {
        console.log("Es par")
    }
    else {
        console.log("Es impar")
    }
}

function Primos(x){
    if (x<2){
        console.log("No es primo")
    }

    for (i = 2; i < x; i++) {
        if (x % i === 0) {
            console.log("No es primo");
            return;
        }
    }
    console.log("Es primo");

}

function OrdenNumeros(num1,num2,num3){
    let numeros = []
    numeros.push(num1,num2,num3)
    numeros.sort(function(a, b){return a - b})
    console.log(numeros)
}

function Resta(a,b){
    let resta = a-b
    console.log(resta)
}

function Multiplicacion(a,b){
    let multiplicacion = a * b
    console.log(multiplicacion)
}

function Division(a,b){
    let division = a / b
    console.log(division)
}

function Calculadora(a,b){
    console.log("Calculadora Simple")
    console.log("1. Suma")
    console.log("2. Resta")
    console.log("3. Multiplicacion")
    console.log("4. Division")
    var entrada2 = parseInt(prompt("Ingresa una opcion: "))

    switch(entrada2){
        case 1:
            Suma(a,b)
            break

        case 2:
            Resta(a,b)
            break

        case 3:
            Multiplicacion(a,b)
            break

        case 4:
            Division(a,b)
            break

        default:
            console.log("Opcion no valida")
    }

}

function main(){
    console.log("Ingresa alguna opcion del menu")
    console.log("1. Mostrar Hola Mundo")
    console.log("2. Sumar")
    console.log("3. Impar o Par")
    console.log("4. Primo")
    console.log("5. Orden de 3 numeros")
    console.log("6. Calculadora")

    var entrada = parseInt(prompt("Seleccion: "))
    
    switch(entrada){
        case 1:
            HolaMundo()
            break

        case 2:
            a = parseInt(prompt("Ingresa un numero: "))
            b = parseInt(prompt("Ingresa otro numero: "))
            Suma(a,b)
            break

        case 3:
            a = parseInt(prompt("Ingresa un numero: "))
            ParImpar(a)
            break

        case 4:
            x = parseInt(prompt("Ingresa un numero: "))
            Primos(x)
            break

        case 5:
            num1 = parseInt(prompt("Ingrese un numero: "))
            num2 = parseInt(prompt("Ingrese un numero: "))
            num3 = parseInt(prompt("Ingrese un numero: "))
            OrdenNumeros(num1,num2,num3)
            break

        case 6:
            a = parseInt(prompt("Ingrese un numero: "))
            b = parseInt(prompt("Ingrese otro numero: "))
            Calculadora(a,b)
            break
        
        default:
            console.log("Opcion no valida")

        
            

    }

}

main()
