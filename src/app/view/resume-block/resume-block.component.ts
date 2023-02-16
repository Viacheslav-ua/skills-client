import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BACKEND_BASE_DOMAIN } from 'src/env';

@Component({
  selector: 'app-resume-block',
  templateUrl: './resume-block.component.html',
  styleUrls: ['./resume-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeBlockComponent {

  constructor(private router: Router) { }

  public get isShow(): boolean {
    return this.router.url === '/resume' ? true : false
  }

  public get serverDocs(): string {
    return BACKEND_BASE_DOMAIN + 'docs'
  }
}
