import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { taskStatus } from 'src/app/core/enums/task-status'

@Component({
  selector: 'app-add-form-ui',
  templateUrl: './add-form-ui.component.html',
  styleUrls: ['./add-form-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormUiComponent implements OnInit {

  public formGroup!: FormGroup
  public status = taskStatus
  // selectedStatus = 'all'

  @Input() public serverError: string | null = ''
  @Input() public disabled!: boolean | null

  @Output() public add = new EventEmitter()
  @Output() public errorSkip = new EventEmitter()
  @Output() public filter = new EventEmitter()

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl(''),
      selectedStatus: new FormControl('all'),
    })
  }

  public onSubmit(): void {
    this.add.emit(this.formGroup.value)
    this.formGroup.setValue({ title: '', selectedStatus: this.formGroup.value.selectedStatus })
  }

  public onChangeFilter(e: MatRadioChange): void {
    this.filter.emit(e.value)
  }

  public get submitDisabled(): boolean {
    return this.disabled || !this.formGroup.value.title
  }
}
