import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { first, Observable } from 'rxjs'
import { ICreateTodo } from 'src/app/core/interfaces/todo.interfaces'
import { todoSkipError } from 'src/app/store/todo-store/store/todo-store.actions'
import { Todo } from 'src/app/store/todo-store/store/todo-store.reducer'
import * as todoSelectors from 'src/app/store/todo-store/store/todo-store.selectors'

@Component({
  selector: 'app-todo-list-block',
  templateUrl: './todo-list-block.component.html',
  styleUrls: ['./todo-list-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListBlockComponent  implements OnInit {

  todoData$: Observable<Todo[]> = this.store$.pipe(select(todoSelectors.getTodoData))
  loading$: Observable<boolean> = this.store$.pipe(select(todoSelectors.getLoading))
  serverError$: Observable<string> = this.store$.pipe(select(todoSelectors.getServerError))

  constructor(
    private store$: Store,
  ) { }

  ngOnInit(): void {

  }

  onCreate(e: ICreateTodo) {

  }

  onErrorSkip() {
    this.serverError$.pipe(
      first(),
    ).subscribe((err) => {
      if (err) {
        this.store$.dispatch(todoSkipError())
      }
    })
  }

  onRemove(e: Todo) {

  }

  onToggleComplete(e: Todo) {

  }
}
