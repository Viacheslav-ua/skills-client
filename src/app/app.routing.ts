import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRouteEnum } from './core/enums'

import { MainLayoutComponent } from './layouts'

const routes: Routes = [
  {
    path: '',
    // component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: AppRouteEnum.Contacts,
        pathMatch: 'full'
      },
      {
        path: AppRouteEnum.Contacts,
        loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule),
      },
      {
        path: AppRouteEnum.ContactEdit,
        loadChildren: () => import('./pages/contact-edit/contact-edit.module').then(m => m.ContactEditModule),
      },
      {
        path: AppRouteEnum.User,
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule),
      }
    ]
  }

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
