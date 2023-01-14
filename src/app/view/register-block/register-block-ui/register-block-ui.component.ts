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
  isEquate: boolean = false

  @Input() formError: string | null = ''
  @Input() disabled!: boolean | null

  @Output()
  register = new EventEmitter()
  @Output()
  errorSkip = new EventEmitter()


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }

  onFormChange() {
    this.errorSkip.emit()
  }

  onSubmit() {
    this.register.emit(this.formGroup.value)
  }

  onChangePass() {
    this.isEquate = this.formGroup.value.password === this.formGroup.value.confirmPassword ? true : false

  }

}
