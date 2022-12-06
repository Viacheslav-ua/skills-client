import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

import { LoginBlockComponent } from './login-block.component'
import { LoginBlockUiComponent } from './login-block-ui'


@NgModule({
  declarations: [
    LoginBlockComponent,
    LoginBlockUiComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [
    LoginBlockComponent,
  ],
})
export class LoginBlockModule { }
