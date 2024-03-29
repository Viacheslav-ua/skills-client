import { createReducer, on } from "@ngrx/store"
import {
  login,
  loginFailed,
  loginSuccess,
  logoutSuccess,
  register,
} from "./auth-store.actions"

export const AUTH_FEATURE_NAME = 'auth'

export interface AuthData {
  accessToken: string
  login: string
  id: number
  iat: number
  exp: number
}

export interface AuthState {
  loading: boolean
  loaded: boolean
  loadAuthData: boolean
  serverError: string
  authData?: AuthData | null
}

export const initialState: AuthState = {
  loading: false,
  loaded: true,
  loadAuthData: false,
  serverError: '',
}

export const authReducer = createReducer(
  initialState,
  on(login, store => ({
    ...store,
    loading: true
  })),
  on(loginSuccess, (state, { authData }) => ({
    ...state,
    authData,
    loaded: true,
    loadAuthData: true,
    loading: false,
    serverError: '',
  })),
  on(loginFailed, (state, { serverError }) => ({
    ...state,
    authData: null,
    loaded: true,
    loadAuthData: true,
    loading: false,
    serverError,
  })),
  on(logoutSuccess, () => ({
    ...initialState,
    loadAuthData: true,
    authData: null,
  })),
  on(register, store => ({
    ...store,
    loading: true,
  })),
)
