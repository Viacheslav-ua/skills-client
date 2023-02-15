import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IAuthUser } from 'src/app/core/interfaces/user.interfaces'

@Component({
  selector: 'app-login-block-ui',
  templateUrl: './login-block-ui.component.html',
  styleUrls: ['./login-block-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginBlockUiComponent implements OnInit {

  public hide = true;
  public formGroup!: FormGroup

  @Input() public formError: string | null = ''
  @Input() public disabled!: boolean | null

  @Output()
  public login: EventEmitter<IAuthUser> = new EventEmitter<IAuthUser>()
  @Output()
  public errorSkip: EventEmitter<void> = new EventEmitter<void>()
  @Output()
  public loginTest: EventEmitter<void> = new EventEmitter<void>()


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
