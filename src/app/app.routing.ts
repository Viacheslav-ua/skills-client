import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store'
import { StoreModule } from '@ngrx/store'
import { AppRouteEnum } from './core/enums'
import { AuthGuard } from './guards/auth.guard'

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
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: AppRouteEnum.ContactEdit,
        loadChildren: () => import('./pages/contact-edit/contact-edit.module').then(m => m.ContactEditModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: AppRouteEnum.User,
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      {
        path: AppRouteEnum.Login,
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
      },
      {
        path: AppRouteEnum.Registration,
        loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule),
      },
      {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule),
      }
    ]
  }

]

@NgModule({
  imports: [
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
    RouterModule.forRoot(routes),
    ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
  ]
})
export class AppRoutingModule {}
