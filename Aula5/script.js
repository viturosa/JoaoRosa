// function numeroMenores() {
//     let numero = parseInt(prompt("Insira um número"))

//     if (numero < 1 || numero > 10) {
//         alert("Número inválido")
//     } else {
//         for (let i = 1; i < numero; i++) {
//             console.log(i)
//         }
//     }
// }

// numeroMenores()

// function fatorial() {
//     let numero = parseInt(prompt("Insira um número"))
//     let i = 1
//     let resultado = 1
//     while ( i <= numero) {
//         resultado *= i
//         i++;
//     }
//     console.log("Resultado: " + resultado)
// }

// fatorial()

function simulador(entrada, parcelas) {

    for (let i = 1; i <= parcelas; i++) {
        let resultado = entrada / parcelas + (i * 0, 12)
        let resultadoFormatado = resultado.toFixed(2)
        console.log(resultadoFormatado)
    }
}
let entrada;
let parcelas;
do {
    entrada = prompt("Insira um valor para ser parcelado ou sair")
    parcelas = prompt("Em quantas vezes?")
     simulador(parseInt(entrada), parseInt(parcelas))
    
} while (entrada != "sair")

