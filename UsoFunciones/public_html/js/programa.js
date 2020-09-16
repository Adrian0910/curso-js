/*
 * El factorial de un numero es:
 * 5! = 1x2x3x4x5 = 120
 */

function usoFunciones(entrada){
    var dato = entrada.value;
    if(dato >= 0 && dato <= 100){
        var resultado = factorial(dato);
        limpiar();
        imprimir(resultado);
    }else{
        limpiar();
        imprimir("Incorrecto. Unicamente se aceptan valores entre 0 y 100");
    }
  
}
function factorial(n){
    if(n==0 || n==1){
        return 1;
    }else{
        return n * factorial (n - 1);
    }
}
function imprimir(valor){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Resultado " + valor;
}
function limpiar(){
    var resultado = document.getElementById("resultado");
    resultado.innerHTML ="";
}