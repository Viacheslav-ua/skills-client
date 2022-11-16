import { createReducer } from "@ngrx/store"

export const AUTH_FEATURE_NAME = 'auth'

export interface AuthData {
  accessToken: string
}

export interface AuthState {
  loading: boolean
  loaded: boolean
  serverError: string
  authData?: AuthData
}

const initialState: AuthState = {
  loading: false,
  loaded: false,
  serverError: '',
}

export const AuthReducer = createReducer(initialState)
