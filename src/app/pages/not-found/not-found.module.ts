import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotFoundRoutingModule } from './not-found.routing'
import { NotFoundComponent } from './not-found.component'



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
  ]
})
export class NotFoundModule { }
