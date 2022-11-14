import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { MainLayoutComponent } from './layouts'

const routes: Routes = [
  {
    path: '',
    // component: MainLayoutComponent,
    children: [
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
