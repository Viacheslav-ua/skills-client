import { createAction, props } from "@ngrx/store";
import { ICreateTodo, IUpdateTodo } from "src/app/core/interfaces/todo.interfaces";
// import { Todo } from "./todo-store.reducer";


export const add = createAction(
  '[Todo] Add',
  props<ICreateTodo>()
)
export const remove = createAction(
  '[Todo] Remove',
  props<{ id: number }>()
)
export const update = createAction(
  '[Todo] Update',
  props<IUpdateTodo>()
)

// export const success = createAction(
//   '[Todo] Success',
//   props<{ todoData: Todo[] }>()
// )

// export const failed = createAction(
//   '[Todo] Failed',
//   props<{ serverError: string }>()
// )

// export const loginSkipError = createAction(
//   '[Todo] Todo Skip Error',
// )
