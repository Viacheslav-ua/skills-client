import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree
} from '@angular/router'
import { first, map, Observable, of } from 'rxjs'
import { AppRouteEnum } from '../core/enums'
import { AuthService } from '../store/auth-store/services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuth()
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsAuth()
  }

  private getIsAuth(): Observable<boolean> {
    return this.authService.isAuth$.pipe(
      first(),
      map(isAuth => {
        if (!isAuth) {
          this.router.navigateByUrl(AppRouteEnum.Login)
        }
        return isAuth
      }),

    )
  }
}
