import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeBlockComponent } from './resume-block.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ResumeBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ResumeBlockComponent],
})
export class ResumeBlockModule { }
