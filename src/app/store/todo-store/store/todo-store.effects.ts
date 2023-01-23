import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, delay, map, of, switchMap } from "rxjs";
import { TodoService } from "../service/todo.service";
import {
  add, getAll, loadingStatusDelay, loadingStatusStart,
  remove, todoAddSuccess, todoFailed, todoRemoveSuccess, todoSuccess, todoUpdateSuccess, update
} from "./todo-store.actions";


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

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType(update),
    switchMap((result) => this.todoService.updateTask({
      id: result.id,
      title: result.title,
      description: result.description,
      status: result.status,
      isCompleted: result.isCompleted,
    })),
    map((updateTodo) => todoUpdateSuccess({ updateTodo })),

    catchError(
      err => (of(
        todoFailed({
          serverError: err.error.message,
        }),
      ))
    ),
  ))

  loadingStatus$ = createEffect(() => this.actions$.pipe(
    ofType(loadingStatusStart),
    delay(500),
    map(() => loadingStatusDelay()),

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
