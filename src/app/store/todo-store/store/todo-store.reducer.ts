import { createReducer, on } from "@ngrx/store"
import {
  add, getAll, loadingStatusDelay, remove, todoAddSuccess, todoFailed,
  todoRemoveSuccess, todoSetFilter, todoSuccess, todoUpdateSuccess
} from "./todo-store.actions"


export const TODO_FEATURE_NAME = 'todo'

export interface Todo {
  id: number
  title: string
  description: string | null
  isCompleted: boolean
  status: string
  createdAt: Date
  updatedAt: Date
  isEdit?: boolean
}

export interface TodoState {
  loading: boolean
  loadingDelay: boolean
  loadTodoData: boolean
  filterTodo: string
  serverError: string
  todoData: Todo[]
}

const initialState: TodoState = {
  loading: false,
  loadingDelay: false,
  loadTodoData: false,
  filterTodo: 'all',
  serverError: '',
  todoData: []
}

export const TodoReducer = createReducer(
  initialState,
  on(getAll, add, remove, state => ({
    ...state,
    loading: true
  })),

  on(loadingStatusDelay, state => ({
    ...state,
    loadingDelay: state.loading ? true : false
  })),

   on(todoFailed, (state, { serverError }) => ({
    ...state,
    todoData: [],
    loading: false,
    loadingDelay: false,
    serverError,
   })),

  on(todoSuccess, (state, { todoData }) => ({
    ...state,
    todoData,
    loading: false,
    loadingDelay: false,
    serverError: '',
  })),
  on(todoAddSuccess, (state, { todo }) => ({
    ...state,
    todoData: [...state.todoData, todo],
    loading: false,
    loadingDelay: false,
    serverError: '',
  })),
  on(todoRemoveSuccess, (state, { id }) => ({
    ...state,
    todoData: state.todoData.filter(todo => todo.id !== id),
    loading: false,
    loadingDelay: false,
    serverError: '',
  })),
  on(todoUpdateSuccess, (state, { updateTodo }) => ({
    ...state,
    todoData: state.todoData.map(
      item => item.id !== updateTodo.id ? item : { ...item, ...updateTodo }
    ),
    loading: false,
    loadingDelay: false,
    serverError: '',
  })),
  on(todoSetFilter, (state, { filterTodo }) => ({
    ...state,
    filterTodo,
  })),
)
