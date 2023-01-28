export interface ICreateTodo {
  title: string
}
export interface IUpdateTodo {
  readonly id?: number
  title?: string
  description?: string
  readonly isCompleted?: boolean
  readonly status?: string
}

export interface ITodoExtended {
  readonly id: number
  readonly title: string
  readonly description: string | null
  readonly isCompleted: boolean
  readonly status: string
  readonly createdAt: Date
  readonly updatedAt: Date
  readonly isEdit?: boolean
  readonly icon: string,
  readonly color: { color: string },
}

export interface ISaveTodo {
  readonly id: number
  title?: string
  description?: string
}
export interface ITitle {
  readonly id: number
  title: string
}

export interface IDescription {
  readonly id: number
  description: string
}
