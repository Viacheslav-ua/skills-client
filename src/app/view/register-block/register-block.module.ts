import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { RegisterBlockComponent } from './register-block.component'
import { RegisterBlockUiComponent } from './register-block-ui/register-block-ui.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    RegisterBlockComponent,
    RegisterBlockUiComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    RegisterBlockComponent,
  ]
})
export class RegisterBlockModule { }
