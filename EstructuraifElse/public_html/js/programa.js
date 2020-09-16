
function determinaClasificacionPorEdades (entrada){
    var resultado = null;
    var edad= entrada.value;
    
    if(edad > 0 && edad <12 ){
        resultado = "AA y A";
    }
    else if(edad >= 12 && edad <=15){
        resultado = "B, AA y A";
    }
    else if(edad >= 15 && edad < 18){
        resultado = "B15, AA, A";
    }
    else if(edad >= 18 && edad < 21){
        resultado = "C, B15. AA, A";
    }
    else if (edad >= 21 && edad <= 122){
        resultado = "Puede ver cualquier pelicula";
    }
    else if (edad > 122){
        resultado = "Edad no valida";
    }else{
        resultado = "Valor invalido, por favor proporciona la edad";
    }
    document.getElementById("resultado").innerHTML = resultado; 
    /*desplegamos el resultado obteniedno el elemento div con getElement 
      y luego agregamos el elemento html (valor) con inner*/
}