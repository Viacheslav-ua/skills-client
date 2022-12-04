import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FooterBlockComponent } from './footer-block.component'



@NgModule({
  declarations: [
    FooterBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterBlockComponent,
  ]
})
export class FooterBlockModule { }
