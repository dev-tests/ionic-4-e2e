import { Component, OnInit } from '@angular/core'
import { RxjsService, GenericData, Endereco } from '../rxjs.service'
import { Observable } from 'rxjs'
import { map, filter, skip, debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  data: string[] = []
  palavra = 'Teste'
  endereco: Promise<Endereco>

  constructor (private rxjsService: RxjsService) { }

  ngOnInit () {
    this.rxjsService.buscarCep('09942088')
    .subscribe(
      next => this.endereco = next.json(),
      error => console.error(error),
      () => console.log('completed')
    )

    this.rxjsService.dataGenerator().pipe(
      skip(10000),
      filter(x => x.data !== new Date()),
      map(x => 'Trocado')
    )
    .subscribe(
      value => this.data.push(value),
      error => console.error(error),
      () => console.log(this.data.length)
      )

  }

  trackByFn (index) {
    return index
  }

}
