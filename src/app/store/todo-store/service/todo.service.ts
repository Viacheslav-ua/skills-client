import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/core/enums/server-endpoints.enum';
import { BACKEND_BASE_DOMAIN } from 'src/env';
import { Todo } from '../store/todo-store.reducer';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private httpClient: HttpClient,
    // private store$: Store
  ) { }

  getAllTasks(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(BACKEND_BASE_DOMAIN + Endpoints.Todo + '6')
  }
}
