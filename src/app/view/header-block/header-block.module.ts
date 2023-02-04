import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderBlockComponent } from './header-block.component'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { AuthStoreModule } from 'src/app/store/auth-store/auth-store.module'
import { SelectLangModule } from '../ui/select-lang/select-lang.module'



@NgModule({
  declarations: [
    HeaderBlockComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SelectLangModule,
  ],
  exports: [
    HeaderBlockComponent
  ]
})
export class HeaderBlockModule { }
