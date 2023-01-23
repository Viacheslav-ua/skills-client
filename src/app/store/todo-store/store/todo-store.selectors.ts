import { createFeatureSelector, createSelector } from "@ngrx/store"
import { TodoState, TODO_FEATURE_NAME } from "./todo-store.reducer"
import { taskStatus } from "src/app/core/enums/task-status"


const getFeature = createFeatureSelector<TodoState>(TODO_FEATURE_NAME)

export const getLoading = createSelector(
  getFeature,
  state => state.loading
)
export const getLoadingDelay = createSelector(
  getFeature,
  state => state.loading && state.loadingDelay
)
export const getServerError = createSelector(
  getFeature,
  state => state.serverError
)
export const getTodoData = createSelector(
  getFeature,
  state => state.todoData
)
export const getTodoDataExtended = createSelector(
  getFeature,
  state => state.todoData.map(todo => {
    const itemStatus = taskStatus.find(item => item.value === todo.status)
    return {
      ...todo,
      icon: itemStatus!.icon,
      color:{ color: itemStatus!.color },
    }
  })
)
