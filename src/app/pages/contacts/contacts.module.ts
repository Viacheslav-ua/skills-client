import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ContactsComponent } from './contacts.component'
import { ContactsRoutingModule } from './contacts.routing'

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
  ]
})
export class ContactsModule { }
