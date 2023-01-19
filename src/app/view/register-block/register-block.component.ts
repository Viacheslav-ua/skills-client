import { ChangeDetectionStrategy, Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { first, Observable } from 'rxjs'
import { IAuthUser } from 'src/app/core/interfaces/user.interfaces'
import { loginSkipError, register } from 'src/app/store/auth-store/store/auth-store.actions'
import * as authSelectors from 'src/app/store/auth-store/store/auth-store.selectors'

@Component({
  selector: 'app-register-block',
  templateUrl: './register-block.component.html',
  styleUrls: ['./register-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterBlockComponent {
  public loading$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoading))
  public loaded$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoaded))
  public serverError$: Observable<string> = this.store$.pipe(select(authSelectors.getServerError))

  constructor(
    private store$: Store,
  ) { }

  public onRegister(registerPayload: IAuthUser) {
    this.store$.dispatch(register(registerPayload))
  }

  public onErrorSkip() {
     this.serverError$.pipe(
      first(),
    ).subscribe((err) => {
      if (err) {
        this.store$.dispatch(loginSkipError())
      }
    })
  }
}
