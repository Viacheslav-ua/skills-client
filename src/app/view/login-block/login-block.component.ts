import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { login } from 'src/app/store/auth-store/store/auth-store.actions'
import * as authSelectors from 'src/app/store/auth-store/store/auth-store.selectors'

@Component({
  selector: 'app-login-block',
  templateUrl: './login-block.component.html',
  styleUrls: ['./login-block.component.scss'],
})
export class LoginBlockComponent implements OnInit {

  loading$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoading))
  loaded$: Observable<boolean> = this.store$.pipe(select(authSelectors.getLoaded))
  serverError$: Observable<string> = this.store$.pipe(select(authSelectors.getServerError))

  constructor(private store$: Store) { }

  ngOnInit(): void {
  }

  onLogin(loginPayload: {login: string, password: string}) {
    this.store$.dispatch(login(loginPayload))
  }

}
