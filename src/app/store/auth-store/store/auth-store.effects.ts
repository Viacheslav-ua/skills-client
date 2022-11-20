import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { select, Store } from "@ngrx/store"
import { delayWhen, first, map, filter, switchMap, timer } from "rxjs"
import { AuthService } from "../services/auth.service"
import { login, loginSuccess } from "./auth-store.actions"
import { AuthData } from "./auth-store.reducer"
import { isAuth } from "./auth-store.selectors"

@Injectable()
export class AuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(action => this.authService.login({
      login: action.login,
      password: action.password,
    }).pipe(
      map(loginSuccessData => loginSuccess(loginSuccessData))
    ))
  ))

  refresh$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    delayWhen((action: AuthData) => timer(
      action.exp*1000 - 60*1000 - Date.now()
    )),
    switchMap(() => this.store.pipe(
      select(isAuth),
      first(),
      filter(authActs => authActs),
    )),
    switchMap(() => this.authService.refresh().pipe(
      map(loginSuccessData => loginSuccess(loginSuccessData)),
    ))
  ))

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
  ) { }


}
