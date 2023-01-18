import { createFeatureSelector, createSelector } from "@ngrx/store"
import { TodoState, TODO_FEATURE_NAME } from "./todo-store.reducer"


const getFeature = createFeatureSelector<TodoState>(TODO_FEATURE_NAME)

export const getLoading = createSelector(
  getFeature,
  state => state.loading
)
export const getServerError = createSelector(
  getFeature,
  state => state.serverError
)
export const getTodoData = createSelector(
  getFeature,
  state => state.todoData
)
