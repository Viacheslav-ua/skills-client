import { createReducer, on } from "@ngrx/store"
import { add, getAll, remove, todoAddSuccess, todoFailed, todoRemoveSuccess, todoSuccess } from "./todo-store.actions"


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
  on(getAll, add, remove, store => ({
    ...store,
    loading: true
  })),

   on(todoFailed, (state, { serverError }) => ({
    ...state,
    todoData: [],
    loading: false,
    serverError,
  })),

  on(todoSuccess, (state, { todoData }) => ({
    ...state,
    todoData,
    loading: false,
    serverError: '',
  })),
  on(todoAddSuccess, (state, { todo }) => ({
    ...state,
    todoData: [...state.todoData, todo],
    loading: false,
    serverError: '',
  })),
  on(todoRemoveSuccess, (state, { id }) => ({
    ...state,
    todoData: state.todoData.filter(todo => todo.id !== id),
    loading: false,
    serverError: '',
  })),
)
