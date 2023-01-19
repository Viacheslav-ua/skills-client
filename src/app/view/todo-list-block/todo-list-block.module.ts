import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoListBlockComponent } from './todo-list-block.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { AddFormUiComponent } from './add-form-ui/add-form-ui.component';
import { TodoListUiComponent } from './todo-list-ui/todo-list-ui.component'

@NgModule({
  declarations: [
    TodoListBlockComponent,
    AddFormUiComponent,
    TodoListUiComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [TodoListBlockComponent],
})
export class TodoListBlockModule { }
