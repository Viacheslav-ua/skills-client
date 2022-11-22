import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { select, Store } from "@ngrx/store"
import { first, map, filter, switchMap, timer, tap, fromEvent } from "rxjs"
import { AuthService } from "../services/auth.service"
import { extractLoginData, initAuth, login, loginSuccess, logoutSuccess } from "./auth-store.actions"
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
      map((authData: AuthData) => loginSuccess({ authData })),
    ))
  ))

  refresh$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    switchMap((action) => timer(
      action.authData.exp*1000 - 60*1000 - Date.now()
    )),
    switchMap(() => this.store.pipe(
      select(isAuth),
      first(),
      filter(authActs => authActs),
    )),
    switchMap(() => this.authService.refresh()),
    map(authData => loginSuccess({ authData })),
  ))

  saveAuthDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap(({ authData }) => {
      localStorage.setItem('authData', JSON.stringify(authData))
    })

  ), {dispatch: false})

  extractLoginData$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth, extractLoginData),
    map(() => {
      const authDataString = localStorage.getItem('authData')
      if (!authDataString) {
        return logoutSuccess()
      }

      const authData: AuthData = JSON.parse(authDataString)
      if ((authData.exp * 1000 - 10 * 1000 - Date.now()) < 0) {
        return logoutSuccess()
      }

      return loginSuccess({ authData })
    })
  ))

  listenStorageEffect$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth),
    switchMap(() => fromEvent(window, 'storage')),
    map(() => extractLoginData()),
  ))

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
  ) { }


}
