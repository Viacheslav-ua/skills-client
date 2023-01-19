import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form-ui',
  templateUrl: './add-form-ui.component.html',
  styleUrls: ['./add-form-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddFormUiComponent implements OnInit {

  public formGroup!: FormGroup

  @Input() public formError: string | null = ''
  @Input() public disabled!: boolean | null

  @Output() public add = new EventEmitter()
  @Output() public errorSkip = new EventEmitter()

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      title: new FormControl('', [Validators.required]),
    })
  }

  public onFormChange():void {
    this.errorSkip.emit()
  }

  public onSubmit():void {
    this.add.emit(this.formGroup.value)
  }

  public get submitDisabled(): boolean {
    return this.disabled || this.formGroup.invalid || !! this.formError
  }
}
