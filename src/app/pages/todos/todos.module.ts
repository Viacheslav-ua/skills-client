import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos.routing';
import { TodoListBlockModule } from 'src/app/view/todo-list-block/todo-list-block.module';



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    TodoListBlockModule,

  ]
})
export class TodosModule { }
