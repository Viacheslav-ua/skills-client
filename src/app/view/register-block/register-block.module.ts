import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RegisterBlockComponent } from './register-block.component'
import { RegisterBlockUiComponent } from './register-block-ui/register-block-ui.component'

@NgModule({
  declarations: [
    RegisterBlockComponent,
    RegisterBlockUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RegisterBlockComponent,
  ]
})
export class RegisterBlockModule { }
