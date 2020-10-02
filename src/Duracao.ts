// API: Application Programming Interface
// Interface de Programação da Aplicação
// A INTERFACE do objeto é composta pelos  métodos e atributos públicos!

export class Duracao {
  private _segundos: number

  // CONTRATO
  static dias(dias: number = 0): Duracao {
    return new Duracao(dias * 24)
  }

  static minutos(minutos: number): Duracao {
    return new Duracao(0, minutos)
  }

  // não há sobrecarga em TS
  // CONTRATO
  constructor(h: number = 0, m: number = 0, s: number = 0) {
    this._segundos = s + m * 60 + h * 3600
  }

  get horas() : number {
    return Math.floor(this._segundos / 3600)
  }

  get minutos() : number {
    return Math.floor(this._segundos % 3600 / 60)
  }

  get segundos() : number {
    return Math.floor(this._segundos % 3600 % 60)
  }


}

export class Dia {

}
