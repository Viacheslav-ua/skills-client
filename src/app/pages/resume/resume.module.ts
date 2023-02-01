import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeRoutingModule } from './resume.routing';
import { ResumeBlockModule } from 'src/app/view/resume-block/resume-block.module';



@NgModule({
  declarations: [
    ResumeComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    ResumeBlockModule,

  ]
})
export class ResumeModule { }
