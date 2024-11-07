class Cafes {
    constructor(nome, torra, tamanho, tipo) {
        this.nome = nome;
        this.torra = torra;
        this.preco = preco;
    }
    descricao() {
        console.log(`nome = ${this.nome} torra = ${this.torra} preco = ${this.preco}`)
    }
}

let panna = new Cafes("panna", "clara", 15.9);
let capuccinoEspecial = new Cafes("capuccinoEspecial", "media", 15.9);
let capuccinoItaliano = new Cafes("capuccinoItaliano", "escura", 15.9);
let capuccinoSucre = new Cafes("capuccinoSucre", "escura", 15.9);
let macchiato = new Cafes("macchiato", "mediaEscura", 15.9);
let moccha = new Cafes("moccha", "clara", 15.9)



pedido = {
    id: 1,
    mesa: parseInt(prompt = "Qual mesa você está?"),
    cliente: {
        nome: prompt = "Qual seu nome?",
        cpf: parseInt(prompt = "Seu CPF")

    },
    produtos: [
        {
            nomeCafe: prompt("Qual o café escolhido?"),
            if (nomeCafe = Cafes) {
                prompt("Qual o tamanho?")
            }, else: {alert: ("Não trabalhamos ainda com esse café")}
        }
    ]

} 





