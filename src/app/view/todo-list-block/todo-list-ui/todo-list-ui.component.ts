import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Todo } from 'src/app/store/todo-store/store/todo-store.reducer'

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListUiComponent implements OnInit {

  @Input() todoData$!: Observable<Todo[]>

  @Output() remove = new EventEmitter()
  @Output() toggleComplete = new EventEmitter()

  ngOnInit(): void {
  }

  onRemove(todo : Todo) {
    // this.todoService.delete(todo)
  }

  onComplete(todo: Todo) {
    // this.todoService.update({...todo, isCompleted: !todo.isCompleted})
  }
}
