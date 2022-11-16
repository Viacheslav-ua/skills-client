import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { AuthReducer, AUTH_FEATURE_NAME } from './auth-store.reducer'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(AUTH_FEATURE_NAME, AuthReducer),
  ]
})
export class AuthStoreModule { }
