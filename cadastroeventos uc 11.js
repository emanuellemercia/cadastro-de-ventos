let pergunta = require('prompt-sync') ()

let dataatual = new Date()
let dataatual = new Date(2022, 07, 14)

if(dataatual > dataevento) {
    console.log("a data do evento ja passou") 
     Precess.exit(0)
}



let idade = pergunta("qual a sua idade?")
if(idade < 18) {
    console.log("idade nao permitida")
    Precess.exit(0)
} esleif(idade >= 18) { 
    console.log("digite um numero")
    Precess.exit(0)
}

let participants = 100
if(participantes >= 100) {
     console.log("limite de participantes excedido")
} else {
    console.log("cadastro concluido")
}