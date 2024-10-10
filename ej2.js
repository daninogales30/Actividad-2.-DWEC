/* ej2.js */

/* ej1 */
let alojamiento = prompt("Introduce los gastos de alojamiento")
alojamiento = parseFloat(alojamiento)

let alimentacion = prompt("Introduce los gastos de alimentacion")
alimentacion = parseFloat(alimentacion)

let entretenimiento = prompt("Introduce los gastos de entretenimiento")
entretenimiento = parseFloat(entretenimiento)

let suma_total = alojamiento + alimentacion + entretenimiento

console.log("El coste total es de: "+suma_total.toFixed(2)+"€.")


/* ej 2 */
let edad_perro = prompt("Dime los años que tiene tu perro");
edad_perro = Number(edad_perro);

let edad_humano = edad_perro * 7;

console.log("La edad del perro en años humanos es "+edad_humano+" años")

/* ej 3 */
let peso = prompt("Ponga su peso en kg");
peso = parseFloat(peso);

let altura = prompt("Ponga su altura en metros");
altura = parseFloat(altura);

function calcularIMC(peso,altura){
    let imc = peso / (altura ** 2);
    return imc;
}

let clasificacionPersona = "";

function clasificacion(imc){
    if(imc<18.5){
        clasificacion = "Bajo";
        return clasificacion;
    } else if(imc>=18.5 && imc<=24.9){
        clasificacion = "Normal";
        return clasificacion;
    } else if(imc>=25 && imc<=29.9){
        clasificacion = "Sobrepeso";
        return clasificacion;
    } else if(imc>=30){
        clasificacion = "Obesidad";
        return clasificacion;
    }
} 

let imcPersona = calcularIMC(peso,altura);

console.log("IMC: "+imcPersona.toFixed(2)+", Clasificación: "+clasificacion(imcPersona));

/* ej 4 */
let precio_original = prompt("Inserte el precio original del producto")

let porcentaje = prompt("Indique el porcentaje a aplicar")

function calcularPrecioFinal(precio,descuento){
    let precioQuitado = precio * (descuento/100);
    let precioFinal = precio - precioQuitado;
    return precioFinal;
}

console.log("El precio final del producto después de aplicar un descuento del "+porcentaje+"% es: "+calcularPrecioFinal(precio_original,porcentaje).toFixed(2)+"€.");

/* ej 5 */
let num1 = prompt("Dime un numero");
num1 = Number(num1);

let num2 = prompt("Dime un numero");
num2 = Number(num2);

function masAlto(num1,num2){
    if(num1>num2){
        return num1;
    } else{
        return num2;
    }
}

function masBajo(num1,num2){
    if(num1>num2){
        return num2;
    } else{
        return num1;
    }
}

function primosEntre(num1,num2){
    const primos = [];

    for(let x=masBajo(num1,num2);x<masAlto(num1,num2);x++){
        let esPrimo=true;
        
        for(let i=2;i<x;i++){
            if(x % i ==0){
                esPrimo=e;fals
            }
        }
    
        if(esPrimo && x > 1){
            primos.push(x);
        }
    }

    return primos;
}

console.log(primosEntre(num1,num2));

/* ej 6 */
function generateFibonacci(numero) {
    let secuenciaFibonacci = [0, 1];
    for (let i = 2; i < numero; i++) {
        secuenciaFibonacci.push(secuenciaFibonacci[i - 1] + secuenciaFibonacci[i - 2]);
    }
    return secuenciaFibonacci.slice(0, numero); 
}

let nTerminos = parseInt(prompt("Ingresa el número de términos de la secuencia Fibonacci:"));

if (nTerminos > 0) {
    console.log("Los primeros " + nTerminos + " términos de la secuencia Fibonacci son: " + generateFibonacci(nTerminos).join(", "));
} else {
    console.log("Por favor, ingresa un número mayor que 0.");
}



/* ej 7 */
let conversion = prompt("Que quiere convertir, a grados celsius(GC) o convertir a grados Fahrenheit(GF)");

function convertirCelsiusAFahrenheit(numero){
    let temp = (numero * (9/5)) + 32;
    return temp;
}

function convertirFahrenheitACelsius(numero){
    let temp = (numero - 32) * (5/9);
    return temp;
}

if(conversion=="GC"){
    let temperatura = prompt("Inserte la temperatura en Grados Celsius");
    temperatura = parseFloat(temperatura);
    let temperatura_nueva = convertirCelsiusAFahrenheit(temperatura);
    console.log(temperatura+" grados Celsius equivalen a "+temperatura_nueva.toFixed(2)+" grados Fahrenheit");
} else if(conversion=="GF"){
    let temperatura = prompt("Inserte la temperatura en Grados Fahrenheit");
    temperatura = parseFloat(temperatura);
    let temperatura_nueva = convertirFahrenheitACelsius(temperatura);
    console.log(temperatura+" grados Celsius equivalen a "+temperatura_nueva.toFixed(2)+" grados Fahrenheit");
}

/* ej 8 */
function calculateFactorial(numero) {
    let result = 1;
    for (let i = 1; i <= numero; i++) {
        result *= i;
    }
    return result;
}

let numero = prompt("Ingrese un numero entero no negativo");
numero = parseInt(numero);

let factorial_numero = calculateFactorial(numero);

console.log("El factorial de "+numero+" es: "+factorial_numero);










