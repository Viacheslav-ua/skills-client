import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-block',
  templateUrl: './header-block.component.html',
  styleUrls: ['./header-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderBlockComponent {}
