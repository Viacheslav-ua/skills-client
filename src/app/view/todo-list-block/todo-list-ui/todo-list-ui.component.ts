import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { Todo } from 'src/app/store/todo-store/store/todo-store.reducer'
import { MatSelectChange } from "@angular/material/select"
import { IDescription, ISaveTodo, ITitle, ITodoExtended } from 'src/app/core/interfaces/todo.interfaces'
import { taskStatus } from 'src/app/core/enums/task-status'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListUiComponent implements OnInit {

  public status = taskStatus.filter(status => status.value !== 'all')
  public formGroup!: FormGroup
  public title: ITitle[] = []
  public description: IDescription[] = []
  public todoInputs: ISaveTodo[] = []

  @Input() public todoData$!: Observable<ITodoExtended[]>

  @Output() public remove = new EventEmitter()
  @Output() public edit = new EventEmitter()
  @Output() public save = new EventEmitter()
  @Output() public statusChange = new EventEmitter()


  ngOnInit(): void {
  }

  public onChangeTitle(e: Event, id: number): void {
    const target = e.target as HTMLInputElement
    if (this.title.length !== 0) {
      this.title.map(item => {
        if (item.id === id) {
          item.title = target.value
          return
        }
        this.title.push({ id, title: target.value })
        return
      })
    } else {
      this.title.push({ id, title: target.value })
    }
  }

  public onChangeDesc(e: Event, id: number): void {
    const target = e.target as HTMLInputElement
    if (this.description.length !== 0) {
      this.description.map(item => {
        if (item.id === id) {
          item.description = target.value
          return
        }
        this.description.push({ id, description: target.value })
        return
      })
    } else {
      this.description.push({ id, description: target.value })
    }
  }

  public onSelectChange(e: MatSelectChange, todo : Todo): void {
    const isCompleted = e.value === 'done' ? true : false
    this.statusChange.emit({ ...todo, status: e.value, isCompleted})
  }

  public onDelete(id: number): void {
  this.remove.emit(id)
  }

  public onEdit(id: number): void {
  this.edit.emit({id, isEdit: true})
  }

  public onEditOff(id: number): void {
  this.edit.emit({id, isEdit: false})
  }

  public onSaveEditOff(id: number): void {
    let title = this.title.find(item => item.id === id)?.title
    let description = this.description?.find(item => item.id === id)?.description

    const payload: ISaveTodo = { id }
    if(title) payload.title = title
    if(description) payload.description = description



    this.save.emit(payload)
  }
}
