import { AuthData, AuthState } from "src/app/store/auth-store/store/auth-store.reducer"

export const fakeAuthData: AuthData = {
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IlRlc3QiLCJpZCI6MiwiaWF0IjoxNjc2NjM2OTQ0LCJleHAiOjE2NzY2MzczMDR9.RI2sQFOhRlzEQsbOH8gLsN-uZ4HjM_qJQPaDTd9Z-d8',
  login: 'Test',
  id: 2,
  iat: 1676636944,
  exp: 1676637304,
}

export const fakeAuthState: AuthState = {
  loading: true,
  loaded: true,
  loadAuthData: true,
  serverError: "server error",
  authData: fakeAuthData,
}
