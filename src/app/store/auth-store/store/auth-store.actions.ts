import { createAction, props } from "@ngrx/store";
import { IAuthUser } from "src/app/core/interfaces/user.interfaces";
import { AuthData } from "./auth-store.reducer";

export const login = createAction(
  '[Auth] Login',
  props<IAuthUser>()
)

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ authData: AuthData }>()
)

export const loginFailed = createAction(
  '[Auth] Login Failed',
  props<{ serverError: string }>()
)

export const loginSkipError = createAction(
  '[Admin Auth] Login Skip Error',
)

export const initAuth = createAction(
  '[Auth] Init Auth',
)

export const logout = createAction(
  '[Auth] Logout'
)

export const logoutSuccess = createAction(
  '[Auth] Logout Success',
)

export const extractLoginData = createAction(
  '[Auth] Extract Login Data'
)

export const register = createAction(
  '[Auth] Register',
  props<IAuthUser>()
)

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<{ authData: AuthData }>()
)

export const registerFailed = createAction(
  '[Auth] Register Failed',
  props<{ serverError: string }>()
)
