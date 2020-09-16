

function generarNumerosPares() {
    var limite = 10;
    var dato = 0;
    while(dato <= limite){
        if(dato % 2== 0){
            document.getElementById("resultado").innerHTML += dato + " ";
        }
        dato++;
    }
}
function limpiarIteracion() {
    document.getElementById("resultado").innerHTML = "";
}



