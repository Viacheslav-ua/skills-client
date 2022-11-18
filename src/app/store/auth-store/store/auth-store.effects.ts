import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, of, switchMap } from "rxjs";
import { AuthService } from "../services/auth.service";
import { login, loginSuccess } from "./auth-store.actions";

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

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }


}
