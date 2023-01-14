import { ChangeDetectionStrategy, Component } from '@angular/core'
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logout } from 'src/app/store/auth-store/store/auth-store.actions'
import * as authSelectors from 'src/app/store/auth-store/store/auth-store.selectors'

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBlockComponent {
  login$: Observable<string | null | undefined > = this.store$.pipe(select(authSelectors.getLogin))

  constructor( private store$: Store) {}

  onLogout() {
    this.store$.dispatch(logout())
  }
}
