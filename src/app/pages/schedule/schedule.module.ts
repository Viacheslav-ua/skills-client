import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScheduleComponent } from './schedule.component'
import { ScheduleComponentModule } from './schedule.routing'



@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleComponentModule,
  ]
})
export class ScheduleModule { }
