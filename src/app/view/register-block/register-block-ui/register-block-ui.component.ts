import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-register-block-ui',
  templateUrl: './register-block-ui.component.html',
  styleUrls: ['./register-block-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterBlockUiComponent implements OnInit {

  formGroup!: FormGroup

  @Input() formError: string | null = ''
  @Input() disabled!: boolean | null

  @Output()
  login = new EventEmitter()
  @Output()
  errorSkip = new EventEmitter()


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onFormChange() {
    this.errorSkip.emit()
  }

  onSubmit() {
    this.login.emit(this.formGroup.value)
  }

}
