import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AuthState, AUTH_FEATURE_NAME } from "./auth-store.reducer"

const getFeature = createFeatureSelector<AuthState>(AUTH_FEATURE_NAME)

export const getLoading = createSelector(
  getFeature,
  state => state.loading
)
export const getLoaded = createSelector(
  getFeature,
  state => state.loaded
)
export const getServerError = createSelector(
  getFeature,
  state => state.serverError
)
export const getAuthData = createSelector(
  getFeature,
  state => state.authData
)
export const getAccessToken = createSelector(
  getAuthData,
  authData => authData && authData.accessToken
)
export const getLogin = createSelector(
  getAuthData,
  authData => authData && authData.login
)
export const isAuth = createSelector(
  getAccessToken,
  accessToken => !!accessToken
)
export const isAuthData = createSelector(
  getFeature,
  state => state.loadAuthData && !!state.authData,
)
