import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogAddUiComponent } from './dialog-add-ui/dialog-add-ui.component';
import { DayAppointments } from 'src/app/pages/schedule/service/schedule.service';

export interface DialogData {
  hour: number;
  appointment: string;
}

// export interface Appointments {
//   date: Date;
//   appointment: string;
// }

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentListComponent{

  public appointment!: string

  @Input() public appointments!: Array<string | null>

  @Output()
  public saveDey: EventEmitter<Array<string | null>> = new EventEmitter<Array<string | null>>()

  public get hoursCaption() {
    const arr = []
    for (let i = 1; i <= this.appointments.length; i++) {
      arr.push(i)
    }
    return arr
  }

  constructor(
    public dialog: MatDialog,
    private cdr: ChangeDetectorRef,
  ) { }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
    this.saveDey.emit(this.appointments)
  }

  openDialog(item: number): void {
    const dialogRef = this.dialog.open(DialogAddUiComponent, {
      data: { hour: item, appointment: this.appointment },
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result) return

      this.appointments[result.hour] = result.appointment
      this.cdr.markForCheck();
      this.saveDey.emit(this.appointments)
    });
  }

}
