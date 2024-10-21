

function subtrair(num1, num2) {
    
    if (num1 >= num2) {
        return num1 - num2 ;
    }
    else {
        return num2 - num1 ;
    }
}
    
var numero1 = parseInt (prompt("Digite um número"))
var numero2 = parseInt (prompt("Digite outro número"))

var resultado = subtrair(numero1, numero2)
console.log ("Resultado = " + resultado)