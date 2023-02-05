import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevComponent } from './dev.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DevComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [DevComponent]
})
export class DevModule { }
