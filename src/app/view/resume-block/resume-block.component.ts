import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BACKEND_BASE_DOMAIN } from 'src/env';

@Component({
  selector: 'app-resume-block',
  templateUrl: './resume-block.component.html',
  styleUrls: ['./resume-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumeBlockComponent implements OnInit {
  public serverDocs = BACKEND_BASE_DOMAIN + 'docs'
  public isShowTranslator = false

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.url === '/resume'
    this.isShowTranslator = this.router.url === '/resume' ? true : false

  }
}
