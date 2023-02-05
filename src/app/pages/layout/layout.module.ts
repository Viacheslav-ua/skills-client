import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout.component'
import { HeaderBlockModule } from 'src/app/view/header-block/header-block.module'
import { FooterBlockModule } from 'src/app/view/footer-block/footer-block.module'
import { HomeRoutingModule } from './layout.routing'
import { SelectLangModule } from 'src/app/view/ui/select-lang/select-lang.module'

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderBlockModule,
    FooterBlockModule,
    SelectLangModule,
  ]
})
export class LayoutModule { }
