/*Ejercicios Basicos JS Nivel 1
1.Programa una función que cuente el número de caracteres de una cadena de texto. Ejemplo: miFuncion("Hola Mundo") devolverá 10.
2.Programa una función que te devuelva el texto recortado según el número de caracteres indicados. Ejemplo: miFuncion("Hola Mundo", 4) devolverá "Hola".
3.Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter. Ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4.Programa una función que repita un texto X veces. Ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//Soluciones:

//E1S1.Solucion Simple:
function myFunction(datos){
    console.log(datos.length);
}
myFunction("Hola Mundo");

//E1S2.Validando tipo de datos
function myFunction2(datos){
    if(typeof datos === 'string'){
        console.log(datos.length);
    } else {
        console.log(`Error:
        Debes introducir una cadena de texto, introdujiste un: "${typeof datos}" `)
    }
}
myFunction2(20); //Aquí introduje un número, prueba a ingresar el string u otro tipo de datos.

//--------------------------------------------------------------------------------------------

