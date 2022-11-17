import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import * as authSelectors from 'src/app/store/auth-store/auth-store.selectors'

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

  onLogin(value: {login: string, password: string}) {
    console.log('OnLogin', value)
  }

}
