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
import { AppRouteEnum } from '../core/enums';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

  private getIsGuest(): Observable<boolean> {
    return of(true).pipe(
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
