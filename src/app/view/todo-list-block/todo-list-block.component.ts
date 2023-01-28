import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { select, Store } from '@ngrx/store'
import { Observable, of, switchMap } from 'rxjs'
import { ICreateTodo, ISaveTodo, ITodoExtended, IUpdateTodo } from 'src/app/core/interfaces/todo.interfaces'
import { remove, add, getAll, loadingStatusStart, update, todoSetFilter, todoEditOneSet, todoSaveOne } from 'src/app/store/todo-store/store/todo-store.actions'
import * as todoSelectors from 'src/app/store/todo-store/store/todo-store.selectors'

@Component({
  selector: 'app-todo-list-block',
  templateUrl: './todo-list-block.component.html',
  styleUrls: ['./todo-list-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListBlockComponent implements OnInit, AfterViewInit {

  @ViewChild('sect') containerElement!: ElementRef

  public todoData$: Observable<ITodoExtended[]> = this.store$.pipe(select(todoSelectors.getTodoDataFilteredExtended))
  public loading$: Observable<boolean> = this.store$.pipe(select(todoSelectors.getLoadingDelay))
  public serverError$: Observable<string> = this.store$.pipe(select(todoSelectors.getServerError))

  constructor(
    private store$: Store,
  ) { }

  ngAfterViewInit(): void {
    this.todoData$.pipe(
      switchMap(result => of(result.length)),
    ).subscribe(
      (result) => {
        this.containerElement.nativeElement.scrollTo({
          top: (result + 2) * 45,
          behavior: "smooth"
        })
      }
    )
  }

  ngOnInit(): void {
    this.store$.dispatch(loadingStatusStart())
    this.store$.dispatch(getAll())
  }

  public onCreate(payload: ICreateTodo): void {
    if (payload) {
      this.store$.dispatch(loadingStatusStart())
      this.store$.dispatch(add(payload))

    }
  }

  public onRemove(id: number): void {
    this.store$.dispatch(loadingStatusStart())
    this.store$.dispatch(remove({ id }))
  }
  public onEditOne(statusEditOne: {id: number, isEdit: boolean}): void {
    this.store$.dispatch(todoEditOneSet(statusEditOne))
  }

  public onSaveEditOne(payload: ISaveTodo ): void {
    this.store$.dispatch(loadingStatusStart())
    this.store$.dispatch(todoSaveOne({ payload }))
    this.store$.dispatch(todoEditOneSet({id: payload.id, isEdit: false}))
  }

  public onStatusSelectChange(updateTodo: IUpdateTodo): void {
    this.store$.dispatch(loadingStatusStart())
    this.store$.dispatch(update(updateTodo))
  }

  public onFilter(condition: string): void {
    this.store$.dispatch(todoSetFilter({filterTodo: condition}))
  }
}
