export interface ICreateTodo {
  title: string
}
export interface IUpdateTodo {
  readonly id?: number
  readonly title?: string
  readonly description?: string
  readonly isCompleted?: boolean
  readonly status?: string
}
