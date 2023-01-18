import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { environment } from '../environments/environment'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { AuthStoreModule } from './store/auth-store/auth-store.module'
import { TodoStoreModule } from './store/todo-store/todo-store.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    AuthStoreModule,
    TodoStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
