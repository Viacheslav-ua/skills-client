import { createAction, props } from "@ngrx/store";
import { ICreateTodo, IUpdateTodo } from "src/app/core/interfaces/todo.interfaces";
import { Todo } from "./todo-store.reducer";


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

export const loadingStatusStart = createAction(
  '[Todo] Loading Status Start',
)
export const loadingStatusDelay = createAction(
  '[Todo] Loading Status Delay',
)

export const todoSuccess = createAction(
  '[Todo] Todo Action Success',
  props<{ todoData: Todo[] }>()
)

export const todoAddSuccess = createAction(
  '[Todo] Todo Add Success',
  props<{ todo: Todo }>()
)

export const todoRemoveSuccess = createAction(
  '[Todo] Todo Remove Success',
  props<{ id: number }>()
)

export const todoUpdateSuccess = createAction(
  '[Todo] Todo Update Success',
  props<{ updateTodo: Todo }>()
)

export const todoFailed = createAction(
  '[Todo]  Todo Action Failed',
  props<{ serverError: string }>()
)

export const todoSkipError = createAction(
  '[Todo] Todo Skip Error',
)

export const todoSetFilter = createAction(
  '[Todo]  Todo Set Filter',
  props<{ filterTodo: string }>()
)
export const todoEditOneSet = createAction(
  '[Todo]  Todo Edit One Set',
  props<{ id: number, isEdit: boolean }>()
)
