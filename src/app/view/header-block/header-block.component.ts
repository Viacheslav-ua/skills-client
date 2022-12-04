import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/auth-store/store/auth-store.actions'

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBlockComponent {
  constructor( private store: Store) {}

  onLogout() {
    this.store.dispatch(logout())
  }
}
