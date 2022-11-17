import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-block-ui',
  templateUrl: './login-block-ui.component.html',
  styleUrls: ['./login-block-ui.component.scss'],
})
export class LoginBlockUiComponent implements OnInit {

  formGroup!: FormGroup

  @Input() formError: string | null = ''
  @Input() disabled!: boolean | null

  @Output()
  login = new EventEmitter()

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onFormChange() {
    this.formError = ''
  }

  onSubmit() {
    this.login.emit(this.formGroup.value)
  }

}
