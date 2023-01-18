import { createReducer } from "@ngrx/store"


export const TODO_FEATURE_NAME = 'todo'

export interface Todo {
  title: string
  created: Date
  status: boolean
}

export interface TodoState {
  loading: boolean
  loadTodoData: boolean
  serverError: string
  todoData: Todo[]
}

const initialState: TodoState = {
  loading: false,
  loadTodoData: false,
  serverError: '',
  todoData: []
}

export const TodoReducer = createReducer(
  initialState,
  // on(login, store => ({
  //   ...store,
  //   loading: true
  // })),
)
