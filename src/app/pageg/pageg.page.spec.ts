import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PagegPage } from './pageg.page'

describe('PagegPage', () => {
  let component: PagegPage
  let fixture: ComponentFixture<PagegPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagegPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PagegPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
