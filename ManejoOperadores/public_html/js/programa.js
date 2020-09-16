document.write("Programa para el manejo de tipo de datos" + "<br/>");


//tipo cadena (string)

var cadena = '"Hola, esto es un string"'; //la comilla simple es para que se reconozca comilla doble en el texto y viceverza
document.write("Valor de la cadena: " + cadena + "<br/>");


//numeros
var numero1 = 15;
var numero2 = parseInt("20"); //el valor original es una cadena
var numero3 = numero1 + numero2;
document.write("El valor del número1 es: " + numero1 + "<br/>");
document.write("El valor del número2 es: " + numero2 + "<br/>");
document.write("El valor total es: " + numero3 + "<br/>");

//boolean

var bandera = true;
var resultado = (numero1 == numero2);
document.write("Valor bandera: " + bandera + "<br/>");
document.write("Valor resultado: " + resultado + "<br/>");

//tipos especiales
var noValue;
var tipoNull = null; //valor null y no definido no es lo mismo 
document.write("Valor tipoNull: " + tipoNull + "<br/>");
document.write("Valor no definido: " + noValue + "<br/>");

//conocer el tipo de valor

resultado = (typeof cadena == "number");
document.write("¿Es número? " + resultado);