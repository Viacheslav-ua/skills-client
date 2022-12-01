import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRouteEnum } from 'src/app/core/enums'
import { ContactsComponent } from './contacts.component'


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ContactsComponent,
  },
  {
    path: AppRouteEnum.ContactEdit,
    loadChildren: () => import('../contact-edit/contact-edit.module').then(m => m.ContactEditModule),
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
export class ContactsRoutingModule {}
