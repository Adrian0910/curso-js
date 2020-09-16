

function manejoArreglos() {
    var lengua = null;
    //definimos el arreglo
    var lenguas = new Array(); //definicion arreglo "new Array", en este caso NO limitas el número de elementos del arreglo
    lenguas[0] = "Chino mandarin "; //elemento del arreglo en indice 0 y denotado por []
    lenguas[1] = "Español ";
    lenguas[2] = "Ingles ";
    lenguas[3] = "Japones ";
    lenguas[4] = "Portugues ";

    //ahora pondremos el codigo para recorrer y leer el arreglo OJO: no necesariamente debe estar dentro de la misma funcion

    //vamos a utilizar un ciclo for para el recorrido
    for (i = 0; i < lenguas.length; i++) { //.length es para saber el largo del arreglo, en este caso la condicion mientras i sea menor al largo de lenguas
        //Ahora vamos a acceder a cada elemento del arreglo: "Nombre del arreglo + Pósicion"
        lengua = lenguas[i]; //regresa los elementos del arreglo, i es por el recorrido que se va haciendo, i puede ser indice 0,1,2,3, etc y se asigana a la variable lengua.
        imprimir(lengua); //aqui creamos un metodo para imprimir la variable
    }
}
function imprimir(valor) { //aqui la funcion que emplea el metodo anterior, valor esta almacenando el dato
    document.getElementById("resultado").innerHTML += valor + "";
}




function limpiarIteracion() {
    document.getElementById("resultado").innerHTML = "";
}



