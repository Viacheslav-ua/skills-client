import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { AuthReducer, AUTH_FEATURE_NAME } from './store/auth-store.reducer'
import { EffectsModule } from '@ngrx/effects'
import { AuthEffects } from './store/auth-store.effects'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(AUTH_FEATURE_NAME, AuthReducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthStoreModule { }
