import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatSelectModule } from '@angular/material/select'
import { SelectLangComponent } from './select-lang.component'
import { TranslateModule } from '@ngx-translate/core'



@NgModule({
  declarations: [
    SelectLangComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    TranslateModule,
  ],
  exports: [SelectLangComponent, TranslateModule]
})
export class SelectLangModule { }
