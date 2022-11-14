import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ContactEditComponent } from './contact-edit.component'



const routes: Routes = [
  {
    path: '',
    component: ContactEditComponent,
  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ContactEditRoutingModule {}
