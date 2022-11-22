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

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsGuest();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getIsGuest();
  }

  private getIsGuest(): Observable<boolean> {
    return this.authService.isGuest$.pipe(
      first(),
      map(isGuest => {
        if (!isGuest) {
          this.router.navigateByUrl(AppRouteEnum.Contacts)
        }
        return isGuest
      }),

    )
  }
}
