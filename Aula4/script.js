var somar = (a, b) => a + b
var subtrair = (a, b) => a - b
var calcularICMS = x => x * 0.21

var precoProduto = parseInt(prompt ("Preço do produto"))
var desconto = parseInt(prompt("Valor do desconto"))

var icms = calcularICMS(precoProduto)
var soma = somar(precoProduto, icms)
var novoPreco = subtrair (soma, desconto)
alert("O preço do produto é de " + novoPreco)