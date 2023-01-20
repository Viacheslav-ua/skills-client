import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap, tap } from "rxjs";
import { TodoService } from "../service/todo.service";
import { getAll, getAllSuccess } from "./todo-store.actions";


@Injectable()
export class TodoEffects {

  allTasks$ = createEffect(() => this.actions$.pipe(
    ofType(getAll),
    switchMap(() => this.todoService.getAllTasks()),
    map(todoData => getAllSuccess({ todoData })),

    )

)


  constructor(
    private actions$: Actions,
    private todoService: TodoService,
    // private authService: AuthService,
    // private store: Store,
  ) {}
}
