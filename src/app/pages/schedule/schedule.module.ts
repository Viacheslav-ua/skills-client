import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ScheduleComponent } from './schedule.component'
import { ScheduleRoutingModule } from './schedule.routing'

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { AppointmentListModule } from 'src/app/view/ui/appointment-list/appointment-list.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ScheduleComponent,
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
     AppointmentListModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatInputModule,
  ]
})
export class ScheduleModule { }
