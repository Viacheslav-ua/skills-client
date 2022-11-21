import { createAction, props } from "@ngrx/store";
import { AuthData } from "./auth-store.reducer";

export const login = createAction(
  '[Auth] Login',
  props<{ login: string, password: string }>()
)

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<AuthData>()
)

export const loginFailed = createAction(
  '[Auth] Login Failed',
  props<{ serverError: string }>()
)

export const initAuth = createAction(
  '[Auth] Init Auth',
)

export const logoutSuccess = createAction(
  '[Auth] Logout Success',
)
