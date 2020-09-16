document.write("Programa sobre manejo de operadores: " + "<br/>");

//operador de asignacion =

var x = 10;
var y = 8;
document.write("valor de la variable x: " + x + "<br/>");
document.write("valor de la variable y: " + y + "<br/>");

//Operador suma +

var resultado = x + y;
document.write("El valor total es: " + resultado + "<br/>");

// Operador de incremento ++

x++;
document.write("El valor de x ahora es: " + x + "<br/>");

//Operador de decremento --
y--;
document.write("El valor de y ahora es: " + y + "<br/>");

//operador += 
// x = x+y; Esto es lo mismo que lo de abajo, solo que se reduce
x += y;
document.write("El valor de x ahora es: " + x + "<br/>");

/*operador de concatenacio +, este funciona como concatenacion si alguno de los
operadores es una cadena */
var texto1 = "Feliz";
var texto2 = "Dia";
document.write("Cadena: " +texto1 + " " + texto2);