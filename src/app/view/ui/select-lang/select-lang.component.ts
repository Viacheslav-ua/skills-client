import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectLangComponent {

  constructor(public translate: TranslateService) {}

  onSelectChange(e: MatSelectChange) {
    this.translate.use(e.value)
  }
}
