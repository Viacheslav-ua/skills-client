import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout.component'
import { RouterModule, Routes } from '@angular/router'
import { AppRouteEnum } from 'src/app/core/enums'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('../contacts/contacts.module')
      .then(module => module.ContactsModule),
  },
  {
    path: AppRouteEnum.ContactEdit,
    component: LayoutComponent,
    loadChildren: () => import('../contact-edit/contact-edit.module')
      .then(module => module.ContactEditModule),
  },
]

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }
