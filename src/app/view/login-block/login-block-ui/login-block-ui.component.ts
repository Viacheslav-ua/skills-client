import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login-block-ui',
  templateUrl: './login-block-ui.component.html',
  styleUrls: ['./login-block-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginBlockUiComponent implements OnInit {

  public hide = true;
  formGroup!: FormGroup

  @Input() public formError: string | null = ''
  @Input() public disabled!: boolean | null

  @Output()
  public login = new EventEmitter()
  @Output()
  public errorSkip = new EventEmitter()
  @Output()
  public loginTest = new EventEmitter()


  public get submitDisabled(): boolean {
    return this.disabled || this.formGroup.invalid || !! this.formError
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  public onFormChange(): void {
    this.errorSkip.emit()
  }

  public onLoginTest(e: MouseEvent): void {
    e.preventDefault()
    this.loginTest.emit()
  }

  public onSubmit(): void {
    this.login.emit(this.formGroup.value)
  }

  public onHide(e: MouseEvent) {
    e.preventDefault()
    this.hide = !this.hide
  }
}
