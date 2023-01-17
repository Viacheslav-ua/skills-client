import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoListBlockComponent } from './todo-list-block.component'
import { TodoListUiComponent } from './todo-list-ui/todo-list-ui.component'

@NgModule({
  declarations: [
    TodoListBlockComponent,
    TodoListUiComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [TodoListBlockComponent],
})
export class TodoListBlockModule { }
