import { ChangeDetectionStrategy, Component } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { first, Observable } from 'rxjs'
import { IAuthUser } from 'src/app/core/interfaces/user.interfaces'
import { login, loginSkipError } from 'src/app/store/auth-store/store/auth-store.actions'
import * as authSelectors from 'src/app/store/auth-store/store/auth-store.selectors'

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginBlockComponent {

  loading$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoaded))
  serverError$: Observable<string> = this.store$.pipe(select(authSelectors.getServerError))

  constructor(
    private store$: Store,
  ) { }

  onLogin(loginPayload: IAuthUser) {
    this.store$.dispatch(login(loginPayload))
  }

  onErrorSkip() {
    this.serverError$.pipe(
      first(),
    ).subscribe((err) => {
      if (err) {
        this.store$.dispatch(loginSkipError())
      }
    })
  }

  onLoginTest() {
    this.onLogin({login: 'Test', password: 'test'})
  }
}
