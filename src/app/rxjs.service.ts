import { Injectable } from '@angular/core'
import { from, Observable, of } from 'rxjs'

export type GenericData = {
  nome: string,
  data: Date
}
export type Endereco = {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,
  unidade: string,
  ibge: string,
  gia: string
}

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor () { }

  data: GenericData[] = []

  buscarCep (cep: string): Observable<Response> {
    const data = from(fetch(`https://viacep.com.br/ws/${cep}/json/`))
    return data
  }

  public dataGenerator (): Observable<GenericData> {
    const data = localStorage.getItem('data')

    if (!data) {
      for (let i = 0; i < 20000; i++) {
        this.data.push({
          nome: 'ABC-' + i,
          data: new Date()
        })
      }
      localStorage.setItem('data', JSON.stringify(this.data))
    } else {
      this.data = JSON.parse(data)
    }

    const newData = from(this.data)
    return newData
  }

}
