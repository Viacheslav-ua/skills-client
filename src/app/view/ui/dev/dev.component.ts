import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevComponent{

  constructor(public translte: TranslateService) { }
}
