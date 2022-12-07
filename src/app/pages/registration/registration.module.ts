import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { RegistrationComponent } from './registration.component'
import { RegistrationRoutingModule } from './registration.routing'
import { RegisterBlockModule } from 'src/app/view/register-block/register-block.module'

@NgModule({
  declarations: [
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RegisterBlockModule,
    RegistrationRoutingModule,
  ]
})
export class RegistrationModule { }
