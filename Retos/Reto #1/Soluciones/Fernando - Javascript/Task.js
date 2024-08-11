const prompt = require("prompt-sync")();

function esPrimo(){
    console.log("Ingrese un numeros: ")
    x = parseInt(prompt())

    if (x<2){
        console.log("No es primo")
    }

    for (i = 2; i < x; i++) {
        if (x % i === 0) {
            console.log("No es primo");
            break;
        }
    }
    console.log("Es primo");
}

function holaMundo(){
    console.log("Hola Mundo!")
}

function suma(){
    console.log("Ingrese dos numeros: ")
    let num1 = parseInt(prompt())
    let num2 = parseInt(prompt())
    console.log(`La suma es: ${num1 + num2}`)
}

function paridad(){
    console.log("Ingrese un numero:")
    let num = parseInt(prompt())
    if (num % 2 === 0){
        console.log("El numero es par")
    } else {
        console.log("El numero es impar")
    }
}

function mayor(){
    console.log("Ingrese tres numeros:")
    let num1 = parseInt(prompt())
    let num2 = parseInt(prompt())
    let num3 = parseInt(prompt())
    if (num1 > num2 && num1 > num3){ 
        console.log(`El numero mayor es: ${num1}`)
    } else if (num2 > num1 && num2 > num3){
        console.log(`El numero mayor es: ${num2}`)
    } else {
        console.log(`El numero mayor es: ${num3}`)
    }
}

function calculadora(){
    console.log("Calculadora")
    console.log("1. Suma")
    console.log("2. Resta")
    console.log("3. Multiplicacion")
    console.log("4. Division")
    console.log("5. Salir")
    let opcion = parseInt(prompt())
    switch(opcion){
        case 1:
            suma()
            break
        case 2:
            resta()
            break
        case 3:
            multiplicacion()
            break
        case 4:
            division()
            break
        case 5:
            console.log("Saliendo...")
            break
        default:
            console.log("Opcion invalida")
    }

    function resta(){
        console.log("Ingrese dos numeros: ")
        let num1 = parseInt(prompt())
        let num2 = parseInt(prompt())
        console.log(`La resta es: ${num1 - num2}`)
    }

    function division(){
        console.log("Ingrese dos numeros: ")
        let num1 = parseInt(prompt())
        let num2 = parseInt(prompt())
        if (num2 === 0){
            console.log("Error: Division por cero")
        }
        console.log(`La division es: ${num1 / num2}`)
    }

    function multiplicacion(){
        console.log("Ingrese dos numeros: ")
        let num1 = parseInt(prompt())
        let num2 = parseInt(prompt())
        console.log(`La multiplicacion es: ${num1 * num2}`)
    }
}
function main(){
    let opcion = 0
    while(opcion!= 5){
        console.log("Menu Principal")
        console.log("1. Es primo")
        console.log("2. Hola Mundo!")
        console.log("3. Suma")
        console.log("4. Paridad")
        console.log("5. Mayor")
        console.log("6. Calculadora")
        console.log("7. Salir")
        opcion = parseInt(prompt())
        switch(opcion){
            case 1:
                esPrimo();
                break;
            case 2:
                holaMundo();
                break;
            case 3:
                suma();
                break;
            case 4:
                paridad();
                break;
            case 5:
                mayor();
                break;
            case 6:
                calculadora();
                break;
            case 7:
                console.log("Saliendo...");
                return            
            default:
                console.log("Opción inválida");
        }
    }
}

main();