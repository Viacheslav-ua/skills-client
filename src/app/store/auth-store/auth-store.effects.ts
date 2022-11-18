import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";
import { login, loginSuccess } from "./auth-store.actions";

@Injectable()
export class AdminAuthEffects {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(login),
    switchMap(action => of(loginSuccess({
      accessToken: 'test'
    })))
  ))

  constructor(private actions$: Actions) { }


}
