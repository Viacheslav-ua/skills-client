import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainLayoutComponent } from './layouts'

const routes: Routes = [
  {
    path: '',
    // component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(module => module.UserModule),
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
