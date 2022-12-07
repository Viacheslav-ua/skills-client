import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-block-ui',
  templateUrl: './login-block-ui.component.html',
  styleUrls: ['./login-block-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginBlockUiComponent implements OnInit {

  formGroup!: FormGroup

  @Input() formError: string | null = ''
  @Input() disabled!: boolean | null

  @Output()
  login = new EventEmitter()
  @Output()
  errorSkip = new EventEmitter()
  @Output()
  loginTest = new EventEmitter()

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onFormChange() {
    this.errorSkip.emit()
  }

  onLoginTest(e: MouseEvent) {
    e.preventDefault()
    this.loginTest.emit()
  }

  onSubmit() {
    this.login.emit(this.formGroup.value)
  }

}
