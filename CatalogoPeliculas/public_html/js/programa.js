


var i = 0; //esta variable la va ahacer de contador 
var pelicula = new Array(); //aqui vamos a poner el array
//todo de manera global porque estaremos trabajando en mas de una funcion con esto

function PushMovie(nombre) {
    pelicula[i] = nombre.value.toUpperCase();
    document.getElementById("resultado").innerHTML += i + ". " + pelicula[i] + "<br/>";
    i++;
    nombre.value = "";
}

function BuscarPelicula(nombre){
   
    var posicion = pelicula.indexOf(nombre.value);
    

    
    if(posicion == -1){
        
        document.getElementById("busqueda").innerHTML = "La pelicula " + nombre.value.toUpperCase() + " no se ha registrado";
    }else{
        document.getElementById("busqueda").innerHTML = "La pelicula " + nombre.value.toUpperCase() + " esta en la posicion " + posicion; 
    }
}
