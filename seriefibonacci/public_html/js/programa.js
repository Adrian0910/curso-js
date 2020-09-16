/*
 * suma de los elementos, por ejemplo:
 * 0, 1, 1, 2, 3, 5, 8...
 */

function sucesionFibonacci(entrada){
    limpiar();
    /*
     * Manejo de la secencia de fibonacci
     * valor a = tiene valor actual
     * valor c = tiene el valor nuevo
     * valor c= tiene el valor siguiente
     */
    //asignamos los valores iniciales
    var a = 0;
    var b = 1;
    var c = null;
    var maxElementos = 100;
    var elementosSerie = entrada.value;
    //validemos la entrada
    if(elementosSerie > maxElementos){
        imprimir("Debes probar con menos de 100 elementos");
        return;
    }
    //imprimir los valores iniciales de la serie
    imprimir(a);
    imprimir(b);
    
    //Realizamos la iteracion de cada uno de los elementos que tendra la serie
    for( i = 0; i < elementosSerie - 2; i++){
        c = a + b;
        a = b; //solo estamos respaldando los valores para avanzar en la sucesion 
        b = c;
        imprimir (c);
    }
}
function imprimir(valor){
    document.getElementById("resultado").innerHTML += valor + " ";
}
function limpiar(){
    document.getElementById("resultado").innerHTML = " ";
}