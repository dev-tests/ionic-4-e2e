import { TestBed } from '@angular/core/testing'

import { RxjsService, Endereco } from './rxjs.service';

describe('RxjsService', () => {
  let service: RxjsService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(RxjsService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('deve retornar o endereço', (done) => {
    service.buscarCep('09942088')
      .subscribe(
        async (value) => {
          const endereco: Endereco = await value.json()
          expect(endereco.cep).toBeTruthy()
          expect(endereco.uf).toBe('SP')
        },
        error => expect(error).toBeFalsy(),
        () => done()
      )
  })

  it('Deve retornar uma porrada de dados', (done) => {
    service.dataGenerator().subscribe(value => {
      expect(value.data).toBeTruthy()
      expect(value.nome).toBeTruthy()
    },
      error => expect(error).toBeFalsy(),
      () => done()
    )
  })
})
