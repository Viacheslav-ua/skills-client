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

  public loading$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoading))
  public loaded$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoaded))
  public serverError$: Observable<string> = this.store$.pipe(select(authSelectors.getServerError))

  constructor(
    private store$: Store,
  ) { }

  public onLogin(loginPayload: IAuthUser):void {
    this.store$.dispatch(login(loginPayload))
  }

  public onErrorSkip():void {
    this.serverError$.pipe(
      first(),
    ).subscribe((err) => {
      if (err) {
        this.store$.dispatch(loginSkipError())
      }
    })
  }

  public onLoginTest():void {
    this.onLogin({login: 'Test', password: 'test'})
  }
}
