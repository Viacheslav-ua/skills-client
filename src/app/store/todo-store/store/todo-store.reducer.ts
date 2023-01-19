import { createReducer } from "@ngrx/store"


export const TODO_FEATURE_NAME = 'todo'

export interface Todo {
  id: number
  title: string
  created: Date
  isCompleted: boolean
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
  todoData: [
    {
      id: 1,
      title: 'For example 1',
      created: new Date(),
      isCompleted: false,
    }
  ]
}

export const TodoReducer = createReducer(
  initialState,
  // on(login, store => ({
  //   ...store,
  //   loading: true
  // })),
)
