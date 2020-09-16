document.write("Programa para determinar si un número es Par o impar <br/>");
var num = parseInt(prompt("Proporciona un número"));
if (num >= 0) {
    if (num % 2 === 0) {
        
        document.write("El número es par");  
    }else{
        document.write("El número es impar");
    }
} else {
    document.write("Ingresa un numero positivo");
}
