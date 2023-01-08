import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt'
import { AuthData } from '../store/auth-store.reducer'
import { select, Store } from '@ngrx/store'
import { isAuthData } from '../store/auth-store.selectors'
import { ServerEndpointsEnum } from 'src/app/core/enums/server-endpoints.enum'

interface IAuth {
  login: string
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // accessToken?: string | null

  isAuth$ = this.store$.pipe(
    select(isAuthData)
  )

  isGuest$ = this.isAuth$.pipe(
    map(isAuth => !isAuth)
  )

  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private store$: Store
  ) { }

  login(body: IAuth): Observable<AuthData> {
    return this.httpClient
      .post<{ accessToken: string }>(ServerEndpointsEnum.Login, body)
      .pipe(
        map(res => ({
            ...res,
            ...this.jwtHelperService.decodeToken(res.accessToken)
        }))
      )
  }

  register(body: IAuth): Observable<AuthData> {
    return this.httpClient
      .post<any>(ServerEndpointsEnum.Register, body)
      .pipe(
        map(res => ({
            ...res,
            ...this.jwtHelperService.decodeToken(res.accessToken)
        }))
      )
  }

  refresh(): Observable<AuthData> {
    return this.httpClient
      .post<{ accessToken: string }>(ServerEndpointsEnum.Refresh, {})
      .pipe(
        map(res => ({
            ...res,
            ...this.jwtHelperService.decodeToken(res.accessToken)
        }))
      )
  }
}
