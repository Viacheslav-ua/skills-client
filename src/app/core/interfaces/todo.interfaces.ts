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

export interface ITodoExtended {
  id: number
  title: string
  description: string | null
  isCompleted: boolean
  status: string
  createdAt: Date
  updatedAt: Date
  isEdit?: boolean
  icon: string,
  color: { color: string },
}
