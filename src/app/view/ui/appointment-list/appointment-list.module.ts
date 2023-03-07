import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentListComponent } from './appointment-list.component';
import { DialogAddUiComponent } from './dialog-add-ui/dialog-add-ui.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';
import { NumberToTimePipe } from './pipes/number-time.pipe';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    AppointmentListComponent,
    DialogAddUiComponent,
    NumberToTimePipe,
  ],
  imports: [
    CommonModule,
    DragDropModule,
    FormsModule,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    AppointmentListComponent
  ]
})
export class AppointmentListModule { }
