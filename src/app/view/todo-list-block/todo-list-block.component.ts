import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { first, Observable } from 'rxjs'
import { ICreateTodo } from 'src/app/core/interfaces/todo.interfaces'
import { add, getAll, todoSkipError } from 'src/app/store/todo-store/store/todo-store.actions'
import { Todo } from 'src/app/store/todo-store/store/todo-store.reducer'
import * as todoSelectors from 'src/app/store/todo-store/store/todo-store.selectors'

@Component({
  selector: 'app-todo-list-block',
  templateUrl: './todo-list-block.component.html',
  styleUrls: ['./todo-list-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListBlockComponent  implements OnInit {

  public todoData$: Observable<Todo[]> = this.store$.pipe(select(todoSelectors.getTodoData))
  public loading$: Observable<boolean> = this.store$.pipe(select(todoSelectors.getLoading))
  public serverError$: Observable<string> = this.store$.pipe(select(todoSelectors.getServerError))

  constructor(
    private store$: Store,
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(getAll())
  }

  public onCreate(payload: ICreateTodo):void {
    if (payload) {
      this.store$.dispatch(add(payload))
    }
  }

  public onRemove(e: Todo):void {

  }

  public onToggleComplete(e: Todo):void {

  }
}
