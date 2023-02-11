import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt'
import { AuthData } from '../store/auth-store.reducer'
import { select, Store } from '@ngrx/store'
import { isAuthData } from '../store/auth-store.selectors'
import { Endpoints } from 'src/app/core/enums/server-endpoints.enum'
import { IAuthUser } from 'src/app/core/interfaces/user.interfaces'
import { BACKEND_BASE_DOMAIN } from 'src/env'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  login(body: IAuthUser): Observable<any> {
    return this.httpClient
      .post<{ accessToken: string }>(BACKEND_BASE_DOMAIN + Endpoints.Login, body)
      .pipe(
        map(res => ({
          ...res,
          ...this.jwtHelperService.decodeToken(res.accessToken)
        }))
      )
  }

  register(body: IAuthUser): Observable<any> {
    return this.httpClient
      .post<{ accessToken: string }>(BACKEND_BASE_DOMAIN + Endpoints.Register, body)
      .pipe(
        map(res => ({
            ...res,
            ...this.jwtHelperService.decodeToken(res.accessToken)
        }))
      )
  }

  refresh(): Observable<any> {
    return this.httpClient
      .post<{ accessToken: string }>(BACKEND_BASE_DOMAIN + Endpoints.Refresh, {})
      .pipe(
        map(res => ({
            ...res,
            ...this.jwtHelperService.decodeToken(res.accessToken)
        }))
      )
  }
}
