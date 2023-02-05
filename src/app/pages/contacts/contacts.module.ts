import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ContactsComponent } from './contacts.component'
import { ContactsRoutingModule } from './contacts.routing'
import { DevModule } from 'src/app/view/ui/dev/dev.module'

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    DevModule,
  ]
})
export class ContactsModule { }
