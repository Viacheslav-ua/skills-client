import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AppRouteEnum } from 'src/app/core/enums'
import { LayoutComponent } from './layout.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('../home/home.module')
      .then(module => module.HomeModule),
  },
  {
    path: AppRouteEnum.Contacts,
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
  // {
    // path: AppRouteEnum.User,
    // component: LayoutComponent,
    // loadChildren: () => import('../user/user.module')
    //   .then(module => module.UserModule),
  // },
  {
    path: AppRouteEnum.Resume,
    component: LayoutComponent,
    loadChildren: () => import('../resume/resume.module')
      .then(module => module.ResumeModule),
  },
  {
    path: AppRouteEnum.Todos,
    component: LayoutComponent,
    loadChildren: () => import('../todos/todos.module')
      .then(module => module.TodosModule),
  },

]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule,
    ]
})
export class HomeRoutingModule {}
