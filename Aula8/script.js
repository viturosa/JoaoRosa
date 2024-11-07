// const cores = []
// for(i = 0; i < 5; i++) {cores.push(prompt="Escolha uma cor")
// } 
// console.log(cores.lenght)
// cores.splice(1, (eliminar - 1))
// let eliminar = parseInt(prompt = "Escolha pela ordem inserida o número da fruta que deseja eliminar")
// for(i = 0; i < 5; i++) { alert("Na posição " + cores[i] + "temos a cor " + cores[index])}
// let novaCor = prompt("Escolha uma nova cor ") 
// if (cores.includes(novaCor) = true ) {}
// else (cores.unshift(novasCor))

const cores = [];
let quantidade = 5;
do {
    let entrada = prompt("Inserir cor");
    cores.push(entrada.toUpperCase());
} while (cores.length != quantidade)
console.log(cores, cores.length)
let deletar = prompt("Delete uma cor");
const corIndex = cores.indexOf(deletar.toUpperCase());
if (corIndex != -1) {
    cores.splice(corIndex, 1);
} else {
    alert("Cor não encontrada")
}
for (let i = 0; i < cores.length; i++) {
    console.log(`Na posição ${i} temos a cor ${cores[i]}`);
}
let entrada = prompt("Inserir cor");
if (!cores.includes(entrada.toUpperCase())) {
    cores.unshift(entrada.toUpperCase());
}
console.log(cores, cores.length)