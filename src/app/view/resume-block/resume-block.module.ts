import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeBlockComponent } from './resume-block.component';
import { RouterModule } from '@angular/router';
import { SelectLangModule } from '../ui/select-lang/select-lang.module';



@NgModule({
  declarations: [
    ResumeBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SelectLangModule,
  ],
  exports: [ResumeBlockComponent],
})
export class ResumeBlockModule { }
