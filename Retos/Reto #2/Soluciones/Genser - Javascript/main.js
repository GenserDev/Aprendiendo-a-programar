//Pasos previos para ejecutar el programa
//Instalar node.js desde tu navegador
//Poner el siguiente comando en la terminal: npm install prompt-sync

//Pasos para correr el programa
//Para correr el programa usar el comando " node main.js " en la terminal

const prompt = require('prompt-sync')(); //Se utiliza ya que prompt no esta de forma nativa en Node.js 

function Factorial(){
    var factorial = 1
    var num = parseInt(prompt(("Ingresa un numero entero positivo: ")))
    for(i = 1; i<=num; i++){
        factorial = factorial * i
    }

    console.log("El factorial de "+ num + " es " + factorial)


}

function Fibonacci(){
    var num1 = 0
    var num2 = 1
    while(num2 <= 50){
        console.log("Secuencia: " + num1 + " , " + num2)
        num1 = num1 + num2
        num2 = num1 + num2
    }

}

function Inversion(){
    var frase = prompt("Ingresa una frase: ")
    console.log("Frase Invertida: " + frase.split("").reverse().join(""))

}

function Contador(){
    var palabra = prompt("Ingresa una frase: ")
    var separador = palabra.split(" ")
    var contador = 0
    console.log(separador)

    for(i in separador){
        contador = contador + 1
    }

    console.log("El numero de palabras de la frase es: " + contador)
}

function Adivinador(){
    console.log("Adivina el numero generado en un rango del 0 al 10")
    var generador = Math.floor(Math.random() * 11)
    var adivinado = parseInt(prompt("Adivina el numero generado: "))
    if(generador == adivinado){
        console.log("Felicidades, adivinaste el numero")
        console.log("El numero era el " +  generador)

    }
    else{
        console.log("Lo lamento, no adivinaste el numero")
        console.log("El numero era el " +  generador)
    }
}

function Orden(){
    var lista = [6, 8, 3, 7, 2, 13, 54, 46, 286, 246, 534]
    console.log("Lista sin ordenar: " + lista)
    lista.sort((a,b) => a-b)
    console.log("Lista ordenada: " + lista)


}

function menu(){
    console.log("---------Menu---------")
    console.log("1. Factorial de un numero")
    console.log("2. Secuencia de Fibonacci")
    console.log("3. Inversión de una Cadena")
    console.log("4. Contar Palabras en una Cadena")
    console.log("5. Adivinar el Número")
    console.log("6. Ordenar una Lista")
}

function main(){
    menu()
    var respuestaUsuario = parseInt(prompt(("Ingresa una opcion del menu: ")))

    switch(respuestaUsuario){
        case 1:
            Factorial()
            break;

        case 2:
            Fibonacci()
            break;

        case 3:
            Inversion()
            break;

        case 4:
            Contador()
            break;

        case 5:
            Adivinador()
            break;

        case 6:
            Orden()
            break;

    }
}


main()