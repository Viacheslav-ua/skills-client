import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { TodoService } from "../service/todo.service";
import { add, getAll, remove, todoAddSuccess, todoFailed, todoRemoveSuccess, todoSuccess } from "./todo-store.actions";


@Injectable()
export class TodoEffects {

  allTasks$ = createEffect(() => this.actions$.pipe(
    ofType(getAll),
    switchMap(() => this.todoService.getAllTasks()),
    map(todoData => todoSuccess({ todoData })),

    catchError(
      err => (of(
        todoFailed({
          serverError: err.error.message,
        }),
      ))
    ),
    ))

  addTask$ = createEffect(() => this.actions$.pipe(
    ofType(add),
    switchMap((result) => this.todoService.addTask(result.title)),
    map(todo => todoAddSuccess({ todo })),

    catchError(
      err => (of(
        todoFailed({
          serverError: err.error.message,
        }),
      ))
    ),
  ))

  removeTask$ = createEffect(() => this.actions$.pipe(
    ofType(remove),
    switchMap((result) => this.todoService.removeTask(result.id)),
    map((id) => todoRemoveSuccess({ id })),

    catchError(
      err => (of(
        todoFailed({
          serverError: err.error.message,
        }),
      ))
    ),

  ))

  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    // private authService: AuthService,
    // private store: Store,
  ) {}
}
