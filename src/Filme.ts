import { Duracao } from './Duracao'

export class Filme {

  titulo: string
  duracao: Duracao

  constructor(titulo: string, minutos: number) {
    this.titulo = titulo
    // this.duracao = Duracao.minutos(minutos)
    this.duracao = new Duracao(0, minutos, 0)
  }

}
