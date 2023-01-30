import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { select, Store } from "@ngrx/store"
import {
  first, map, filter, switchMap, timer, tap, fromEvent, distinctUntilChanged, skip, catchError, of
} from "rxjs"
import { AppRouteEnum } from "src/app/core/enums"
import { AuthService } from "../services/auth.service"
import {
  extractLoginData, initAuth, login, loginFailed, loginSkipError, loginSuccess, logout, logoutSuccess, register
} from "./auth-store.actions"
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
      map((authData: AuthData) => {
       this.router.navigateByUrl(AppRouteEnum.Main)
       return loginSuccess({ authData })
      }),

      catchError(
        error => (of(loginFailed({
          serverError: error.error.message,
          }),
        ))
      )
    ))
  ))
  register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
     switchMap(action => this.authService.register({
      login: action.login,
      password: action.password,
    }).pipe(
      map((authData: AuthData) => {
       this.router.navigateByUrl(AppRouteEnum.Main)
       return loginSuccess({ authData })
      }),

      catchError(
        error => (of(loginFailed({
          serverError: error.error.message,
          }),
        ))
      )
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

  listenAuthorizeEffect$ = createEffect(() => this.actions$.pipe(
    ofType(initAuth),
    switchMap(() => this.authService.isAuth$),
    distinctUntilChanged(),
    skip(1),
    tap(isAuthorized => {
      const isLogin = this.router.url === '/' + AppRouteEnum.Login

      if (isLogin) {
        this.router.navigateByUrl(
          isAuthorized ? AppRouteEnum.Main : AppRouteEnum.Login
        )
      }

      if (!isAuthorized) {
        this.router.navigateByUrl(AppRouteEnum.Login)
      }
    })


  ), {dispatch: false})

  skipServerError$ = createEffect(() => this.actions$.pipe(
    ofType(loginSkipError),
    map(() => {
      if (true) {
        return loginFailed({serverError: ''})
      }
    })
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    map(() => {
      localStorage.removeItem('authData')
      return logoutSuccess()
    })
  ))


  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store,
    private router: Router,
  ) { }


}
