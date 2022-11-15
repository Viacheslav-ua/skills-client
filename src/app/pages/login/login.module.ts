import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginComponent } from './login.component'
import { LoginRoutingModule } from './login.routing'
import { LoginBlockModule } from 'src/app/view/login-block'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    LoginBlockModule,
  ]
})
export class LoginModule { }
