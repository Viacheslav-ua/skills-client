import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoListBlockComponent } from './todo-list-block.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatIconModule } from '@angular/material/icon'
import { MatRadioModule } from '@angular/material/radio'
import { AddFormUiComponent } from './add-form-ui/add-form-ui.component'
import { TodoListUiComponent } from './todo-list-ui/todo-list-ui.component'
import { SpinnerModule } from '../ui/spinner/spinner.module'

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
    MatSelectModule,
    SpinnerModule,
    MatIconModule,
    MatRadioModule,
    ],
  exports: [TodoListBlockComponent],
})
export class TodoListBlockModule { }
