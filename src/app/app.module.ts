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
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader'
import { TranslateService } from '@ngx-translate/core'
import { TranslateEnum } from './core/enums/translate.enum'
import { SelectLangModule } from './view/ui/select-lang/select-lang.module';
import { TranslateMockPipe } from './pipes/translate-mock.pipe'

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}

@NgModule({
  declarations: [
    AppComponent,
    TranslateMockPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: TranslateEnum.En
    }),
    AuthStoreModule,
    TodoStoreModule,
    SelectLangModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
