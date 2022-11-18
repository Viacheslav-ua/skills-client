import { createAction, props } from "@ngrx/store";

export const login = createAction(
  '[Auth] Login',
  props<{ login: string, password: string }>()
)

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ accessToken: string }>()
)

export const loginFailed = createAction(
  '[Auth] Login Failed',
  props<{ serverError: string }>()
)
