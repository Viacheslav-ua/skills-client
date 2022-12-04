import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LayoutComponent } from './layout.component'
import { RouterModule, Routes } from '@angular/router'
import { AppRouteEnum } from 'src/app/core/enums'
import { HeaderBlockModule } from 'src/app/view/header-block/header-block.module'
import { FooterBlockModule } from 'src/app/view/footer-block/footer-block.module'

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
    HeaderBlockModule,
    FooterBlockModule,
  ]
})
export class LayoutModule { }
