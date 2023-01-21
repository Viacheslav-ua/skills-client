import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Endpoints } from 'src/app/core/enums/server-endpoints.enum';
import { DeleteResult } from 'src/app/core/interfaces/server.interfaces';
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
      .get<Todo[]>(BACKEND_BASE_DOMAIN + Endpoints.Todo)
  }

  addTask(title: string): Observable<Todo> {
    return this.httpClient
      .post<Todo>(
        BACKEND_BASE_DOMAIN + Endpoints.Todo,
        { title }
    )
  }

  removeTask(id: number): Observable<any> {
    return this.httpClient
      .delete<DeleteResult>(`${BACKEND_BASE_DOMAIN}${Endpoints.Todo}/${id}`)
      .pipe(
      map(() => id)
    )
  }
}
