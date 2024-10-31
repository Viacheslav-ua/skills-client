import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IAuthUser } from 'src/app/core/interfaces/user.interfaces';

@Component({
  selector: 'app-register-block-ui',
  templateUrl: './register-block-ui.component.html',
  styleUrls: ['./register-block-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterBlockUiComponent implements OnInit {

  public hide = true;
  public formGroup!: FormGroup
  private isEquate: boolean = false

  @Input() public formError: string | null = ''
  @Input() public disabled!: boolean | null

  @Output()
  public register: EventEmitter<IAuthUser> = new EventEmitter<IAuthUser>()
  @Output()
  public errorSkip: EventEmitter<void> = new EventEmitter<void>()


  public get submitDisabled(): boolean {
    return this.disabled || this.formGroup.invalid || !! this.formError || !this.isEquate
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    })
  }

  public onFormChange():void {
    this.errorSkip.emit()
  }

  public onSubmit(): void {
    const { confirmPassword, ...authUser  } = this.formGroup.value
    this.register.emit(authUser)
  }

  public onChangePass(): void {
    this.isEquate = this.formGroup.value.password === this.formGroup.value.confirmPassword ? true : false
  }

  public onHide(e: MouseEvent) {
    e.preventDefault()
    this.hide = !this.hide
  }
}
