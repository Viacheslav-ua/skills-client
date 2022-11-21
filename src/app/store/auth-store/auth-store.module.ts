import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Store, StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt'
import { AuthReducer, AUTH_FEATURE_NAME } from './store/auth-store.reducer'
import { AuthEffects } from './store/auth-store.effects'
import { AuthInterceptor } from './interceptors/auth.interceptor'
import { initAuth } from './store/auth-store.actions'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: request => request as any
      }
    }),
    StoreModule.forFeature(AUTH_FEATURE_NAME, AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    }
  ]
})
export class AuthStoreModule {
  constructor(store$: Store) {
    store$.dispatch(initAuth())
  }
}
