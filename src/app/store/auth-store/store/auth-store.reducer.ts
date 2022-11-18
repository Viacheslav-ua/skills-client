import { createReducer, on } from "@ngrx/store"
import { login, loginFailed, loginSuccess } from "./auth-store.actions"

export const AUTH_FEATURE_NAME = 'auth'

export interface AuthData {
  accessToken: string
}

export interface AuthState {
  loading: boolean
  loaded: boolean
  serverError: string
  authData?: AuthData | null
}

const initialState: AuthState = {
  loading: false,
  loaded: true,
  serverError: '',
}

export const AuthReducer = createReducer(
  initialState,
  on(login, store => ({
    ...store,
    loading: true
  })),
   on(loginSuccess, (state, authData: AuthData) => ({
    ...state,
    authData,
    loaded: true,
    loading: false,
    serverError: '',
  })),
  on(loginFailed, (state, {serverError}) => ({
    ...state,
    authData: null,
    loaded: true,
    loading: false,
    serverError,
  }))
)
