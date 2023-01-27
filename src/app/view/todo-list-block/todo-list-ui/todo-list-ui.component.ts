import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { Todo } from 'src/app/store/todo-store/store/todo-store.reducer'
import { MatSelectChange } from "@angular/material/select"
import { ITodoExtended } from 'src/app/core/interfaces/todo.interfaces'
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
  public title: string = ''
  public description: string = ''

  @Input() public todoData$!: Observable<ITodoExtended[]>

  @Output() public remove = new EventEmitter()
  @Output() public edit = new EventEmitter()
  @Output() public statusChange = new EventEmitter()


  ngOnInit(): void {
  }

  public onChangeTitle(e: Event): void {
    const target = e.target as HTMLInputElement
    this.title = target.value
  }

  public onChangeDesc(e: Event): void {
    const target = e.target as HTMLInputElement
    this.description = target.value
  }

  public onRemove(todo : Todo):void {
    this.remove.emit(todo.id)
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

  public onEditSaveOff(id: number): void {
  this.edit.emit({id, isEdit: false})
  }
}
