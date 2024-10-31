import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { DialogData } from '../appointment-list.component';

@Component({
  selector: 'app-dialog-add-ui',
  templateUrl: './dialog-add-ui.component.html',
  styleUrls: ['./dialog-add-ui.component.scss']
})
export class DialogAddUiComponent {

  appointment!: string

  constructor(
    public dialogRef: MatDialogRef<DialogAddUiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public translate: TranslateService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
