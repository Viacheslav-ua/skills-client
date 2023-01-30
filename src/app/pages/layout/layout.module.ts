import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout.component'
import { HeaderBlockModule } from 'src/app/view/header-block/header-block.module'
import { FooterBlockModule } from 'src/app/view/footer-block/footer-block.module'
import { HomeRoutingModule } from './layout.routing'

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderBlockModule,
    FooterBlockModule,
  ]
})
export class LayoutModule { }
