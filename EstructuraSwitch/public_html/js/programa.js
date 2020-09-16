function diaSegunFecha(entrada) {
    var fechaTexto = null;
    //tenemos que convertir la enrtrada a un obj tipo fecha
    var fecha = new Date(entrada.value);
    dia = fecha.getDay();

    switch (dia) {
        case 0:
            fechaTexto = "El dia es Lunes";
            break;
        case 1:
            fechaTexto = "El dia es Martes";
            break;
        case 2:
            fechaTexto = "El dia es Miercoles";
            break;
        case 3:
            fechaTexto = "El dia es Jueves";
            break;
        case 4:
            fechaTexto = "El dia es Viernes";
            break;
        case 5:
            fechaTexto = "El dia es Sabado";
            break;
        case 6:
            fechaTexto = "El dia es Domingo";
            break;
        default:
            fechaTexto = "Valor erroneo de fecha";
    }
    document.getElementById("resultado").innerHTML = fechaTexto;
}