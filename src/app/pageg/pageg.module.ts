import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router'

import { IonicModule } from '@ionic/angular'

import { PagegPage } from './pageg.page'
import { ReactiveComponent } from '../reactive/reactive.component'

const routes: Routes = [
  {
    path: '',
    component: PagegPage
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PagegPage,
    ReactiveComponent
  ]
})
export class PagegPageModule {}
