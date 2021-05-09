/*Ejercicios Basicos JS Nivel 1
1.Programa una función que cuente el número de caracteres de una cadena de texto. Ejemplo: miFuncion("Hola Mundo") devolverá 10.
2.Programa una función que te devuelva el texto recortado según el número de caracteres indicados. Ejemplo: miFuncion("Hola Mundo", 4) devolverá "Hola".
3.Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter. Ejemplo: miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4.Programa una función que repita un texto X veces. Ejemplo: miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//Soluciones:

//--------------------------------------------------------------------------------------------

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

//E2S1.Solución Simple
function myFunction3(datos,tamaño){
    console.log(datos.slice(0,tamaño))
}
myFunction3("Hola Mundo", 4);

//--------------------------------------------------------------------------------------------

//E3S1.Solución Simple
function myFunction4(datos,separador){
    arreglo = datos.split(separador);//tambien podrias llevarlo directamente al console.log sin crear variable
    console.log(arreglo);
}
myFunction4("Hola como estas?"," ");

//--------------------------------------------------------------------------------------------

//E4S1.Solucion Simple
function myFunction5(datos,iterador){
    for (let index = 0; index < iterador; index++) {
        console.log(index+1,datos)  //solo pongo el index el console.log a modo de enumeracion en consola, pero no es necesario
    }
}
myFunction5("Hola Mundo",4);