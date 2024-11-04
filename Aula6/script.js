// let fruta = {
//     nome: "caju",
//     cor: "laranja",
//     peso: 100,
// }
// console.log(fruta)

// fruta.nome = "maçã";
// fruta["cor"] = "vermelho";

// console.log("A cor da fruta é", fruta.cor)
// console.log("O nome da fruta é ", fruta["nome"])

// function fruta (nome, cor, peso, tipo) {
// this.nome = nome;
// this.cor = cor;
// this.peso = peso;
// this.tipo = tipo;

//     this.falar = function() {
//     console.log(`Eu me chamo ${this.nome}`)}

//     this.pesoVezesQuantidade = function(quantidade){
//     return this.peso * quantidade}
// }

// let banana = new fruta ("banana", "amarela", 100, "fruta")
// let manga = new fruta ("manga", "amarela", 200, "fruta")
// let tomate = new fruta ("tomate", "vermelho", 80, "fruta")

// console.log(banana);
// console.log(manga);
// console.log(tomate);

// let bananaQtd = banana.pesoVezesQuantidade(10);

// console.log(banana.nome.lenght);
// console.log(banana.cor.toUpperCase());
// console.log(banana.tipo.toLowerCase());

// for (const propriedade in banana) {
//     console.log(banana[propriedade]);
// }

class Alimentos {
    constructor(nome, cor, peso, tipo) {
        this.nome = nome;
        this.cor = cor;
        this.peso = peso;
        this.tipo = tipo;
    }
        descricao(){
            console.log(`nome = ${this.nome} cor = ${this.cor}`)
        }
    }

const fruta1 = new Alimentos ("acerola", "laranja", 200, "fruta");
const verdura1 = new Alimentos ("abobrinha", "verde", 150, "verdura");

