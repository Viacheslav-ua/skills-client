import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { AuthReducer, AUTH_FEATURE_NAME } from './store/auth-store.reducer'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/auth-store.effects'
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt'

@NgModule({
  declarations: [],
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
  ]
})
export class AuthStoreModule { }
