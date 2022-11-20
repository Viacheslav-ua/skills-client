import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http'
import { first, mergeMap, Observable } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { getAccessToken } from '../store/auth-store.selectors'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store$: Store) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return this.store$.pipe(
      select(getAccessToken),
      first(),
      mergeMap(token => {
        const authReq = token
          ? request.clone({
              setHeaders: {
                Authorization: `Bearer ${token}`
              }
            })
          : request

        return next.handle(authReq)
      })
    )
  }
}
