import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { LoginBlockComponent } from './login-block.component'
import { LoginBlockUiComponent } from './login-block-ui'

@NgModule({
  declarations: [
    LoginBlockComponent,
    LoginBlockUiComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginBlockComponent,
  ],
})
export class LoginBlockModule { }
