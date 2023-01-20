import { createReducer, on } from "@ngrx/store"
import { getAll, getAllSuccess } from "./todo-store.actions"


export const TODO_FEATURE_NAME = 'todo'

export interface Todo {
  id: number
  title: string
  description: string | null
  isCompleted: boolean
  status: string
  createdAt: Date
  updatedAt: Date
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
  on(getAll, store => ({
    ...store,
    loading: true
  })),
   on(getAllSuccess, (state, { todoData }) => ({
    ...state,
    todoData,
    loading: false,
    serverError: '',
  })),
)
