
var nombre = null; //variable global

function mostrarNombre(parametro){
    nombre = parametro.value; // la variable global se esta utilizando aqui
    var saludo = "Hola " + nombre.toUpperCase();
   
    document.getElementById("resultado").innerHTML = saludo;
}

function saludarLocal (parametro){
    var nombre = parametro;//variable local
    alert("Hola " + nombre + " (local)");
    alert("Hola " + this.nombre + " (global)"); //this es para acceder a las globales aunque no es necesario si no se ocultan las variables globales
}
function saludarGlobal (){
    alert("Hola " + nombre);
}