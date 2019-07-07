import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ReactiveComponent } from './reactive.component'

describe('ReactiveComponent', () => {
  let component: ReactiveComponent
  let fixture: ComponentFixture<ReactiveComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('Data should be empty', () => {
    expect(component.data.length === 0)
  })
})
