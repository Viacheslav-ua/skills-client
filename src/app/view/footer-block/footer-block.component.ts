import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.component.html',
  styleUrls: ['./footer-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBlockComponent {}
