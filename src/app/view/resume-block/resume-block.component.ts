import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BACKEND_BASE_DOMAIN } from 'src/env';

@Component({
  selector: 'app-resume-block',
  templateUrl: './resume-block.component.html',
  styleUrls: ['./resume-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeBlockComponent {
  serverDocs = BACKEND_BASE_DOMAIN + 'docs'
}
