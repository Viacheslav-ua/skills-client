import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScheduleService } from './service/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
 public activeDay!: Date
  public appointmentsOfDay!: Array<string | null>

  constructor(
    private scheduleService: ScheduleService,
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    this.activeDay = today
    this.appointmentsOfDay = this.scheduleService.getAppointments(this.activeDay);
  }

  onChange(e: Date) {
    this.activeDay = e
    this.appointmentsOfDay = this.scheduleService.getAppointments(e);
  }

  onSave(appointments: Array<string | null>): void {
    this.scheduleService.saveAppointments({ date: this.activeDay.toDateString(), appointments })
  }
}
