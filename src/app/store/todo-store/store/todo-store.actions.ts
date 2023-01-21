import { createAction, props } from "@ngrx/store";
import { ICreateTodo, IUpdateTodo } from "src/app/core/interfaces/todo.interfaces";
import { Todo } from "./todo-store.reducer";
// import { Todo } from "./todo-store.reducer";


export const getAll = createAction(
  '[Todo] getAll'
)
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

export const todoSuccess = createAction(
  '[Todo] Todo Action Success',
  props<{ todoData: Todo[] }>()
)

export const todoFailed = createAction(
  '[Todo]  Todo Action Failed',
  props<{ serverError: string }>()
)

export const todoSkipError = createAction(
  '[Todo] Todo Skip Error',
)
