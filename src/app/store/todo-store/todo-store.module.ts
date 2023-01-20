import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { TodoReducer, TODO_FEATURE_NAME } from './store/todo-store.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './store/todo-store.effects'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(TODO_FEATURE_NAME, TodoReducer),
    EffectsModule.forFeature([TodoEffects])
  ]
})
export class TodoStoreModule { }
