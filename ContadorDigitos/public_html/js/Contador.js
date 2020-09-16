document.write("Programa para contar el número de dígitos de un número entero positivo:<br/>");
var num = parseInt(prompt("Proporciona un número entero positivo", 1));
var contador_digitos = 0;
while (num >= 1) {
 num = num / 10;
 contador_digitos++;
}
document.write("El número proporcionado contiene " + contador_digitos + " dígitos.");
