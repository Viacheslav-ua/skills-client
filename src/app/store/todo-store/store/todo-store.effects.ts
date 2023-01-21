import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { TodoService } from "../service/todo.service";
import { getAll, todoFailed, todoSuccess } from "./todo-store.actions";


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
      )
    )
  )


  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    // private authService: AuthService,
    // private store: Store,
  ) {}
}
