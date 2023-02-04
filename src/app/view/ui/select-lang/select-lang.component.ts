import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectLangComponent implements OnInit {

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {
  }

  onSelectChange(e: MatSelectChange) {
    this.translate.use(e.value)
  }
}
