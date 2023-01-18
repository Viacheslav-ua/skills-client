import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRowComponent } from './list-row.component';



@NgModule({
  declarations: [
    ListRowComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ListRowComponent],
})
export class ListRowModule { }
