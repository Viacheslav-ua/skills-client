import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs'
import { Todo } from 'src/app/store/todo-store/store/todo-store.reducer'
import { ISelectOptions } from 'src/app/core/interfaces/select.interfaces'

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListUiComponent implements OnInit {

  @Input() public todoData$!: Observable<Todo[]>
  @Input() public taskStatus!: ISelectOptions[]

  @Output() public remove = new EventEmitter()
  @Output() public toggleComplete = new EventEmitter()

  ngOnInit(): void {
  }

  public onRemove(todo : Todo):void {
    this.remove.emit(todo.id)
  }

  public onComplete(todo: Todo):void {
    // this.todoService.update({...todo, isCompleted: !todo.isCompleted})
  }
}
