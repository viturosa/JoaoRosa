class Cafes {
    constructor(nome, mesa, tamanho, tipo) {
        this.nome = nome;
        this.mesa = mesa;
        this.tamanho = tamanho;
        this.tipo = tipo;
    }
        descricao(){
            console.log(`nome = ${this.nome} mesa = ${this.mesa}`)
        }
    }

let coado = new Cafes ("coado", 2, "medio", "descafeinado");
let capuccino = new Cafes ("capuccino", 3, "medio", "avela");

console.log(coado.descricao())
console.log(capuccino.descricao())