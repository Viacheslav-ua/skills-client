import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContactEditComponent } from './contact-edit.component'
import { ContactEditRoutingModule } from './contact-edit.routing'


@NgModule({
  declarations: [
    ContactEditComponent
  ],
  imports: [
    CommonModule,
    ContactEditRoutingModule
  ]
})
export class ContactEditModule { }
