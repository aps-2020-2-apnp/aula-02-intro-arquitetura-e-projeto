import { Produto } from './Produto'
import { Duracao } from './Duracao'

let p1 = new Produto('XBox One', 3540.1)
console.log(p1)
console.log(p1.descricao)
console.log(p1.taxaImportacao)

let d1 = new Duracao(3, 56, 7) // 03:56:07
console.log(d1) // imprimir o objeto não é o toString
console.log(d1.segundos)
console.log(d1.horas, d1.minutos, d1.segundos)

// let d2 = new Duracao(16) // método fábrica
let d2 = Duracao.dias(2)
console.log(d2.segundos)
// let d3 = new Duracao(0, 30, 0)
let d3 = Duracao.minutos(30) // método fábrica
console.log(d3);

console.log(d3.minutos)


