import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form-ui',
  templateUrl: './add-form-ui.component.html',
  styleUrls: ['./add-form-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormUiComponent implements OnInit {

  formGroup!: FormGroup

  @Input() formError: string | null = ''
  @Input() disabled!: boolean | null

  @Output() add = new EventEmitter()
  @Output() errorSkip = new EventEmitter()

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
    })
  }

  onFormChange() {
    this.errorSkip.emit()
  }

   onSubmit() {
    this.add.emit(this.formGroup.value)
  }
}
