import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store'
import { StoreModule } from '@ngrx/store'
import { AppComponent } from './app.component'
import { AppRouteEnum } from './core/enums'
import { AuthGuard } from './guards/auth.guard'
import { GuestGuard } from './guards/guest.guard'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: AppRouteEnum.Main,
        pathMatch: 'full'
      },
      {
        path: AppRouteEnum.Main,
        loadChildren: () => import('./pages/layout/layout.module').then(m => m.LayoutModule),
        canLoad: [AuthGuard],
        canActivate: [AuthGuard],
      },
      // {
      //   path: AppRouteEnum.User,
      //   loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
      //   canLoad: [AuthGuard],
      //   canActivate: [AuthGuard],
      // },
      {
        path: AppRouteEnum.Login,
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
        canLoad: [GuestGuard],
        canActivate: [GuestGuard],
      },
      {
        path: AppRouteEnum.Resume,
        loadChildren: () => import('./pages/resume/resume.module').then(m => m.ResumeModule),
        // canLoad: [GuestGuard],
        // canActivate: [GuestGuard],
      },
      {
        path: AppRouteEnum.Registration,
        loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule),
        canLoad: [GuestGuard],
        canActivate: [GuestGuard],
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
  // declarations: [
  //   MainLayoutComponent,
  // ],
  imports: [
    StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer),
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot(routes),
    ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    GuestGuard,
  ]
})
export class AppRoutingModule {}
