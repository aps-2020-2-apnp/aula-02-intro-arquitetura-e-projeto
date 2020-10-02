export class Produto {
  descricao: string
  // ti: number
  // taximp: number
  // significativo, pronunciável
  taxaImportacao: number

  constructor(descricao: string, ti: number) {
    this.descricao = descricao
    this.taxaImportacao = ti
  }
}
