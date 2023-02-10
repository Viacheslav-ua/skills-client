import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Endpoints } from 'src/app/core/enums/server-endpoints.enum';
import { BACKEND_BASE_DOMAIN } from 'src/env';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public serverDocs = BACKEND_BASE_DOMAIN + Endpoints.Docs

  constructor(public translate: TranslateService) {}

}
