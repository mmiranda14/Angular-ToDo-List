import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url = 'http://localhost:3000/task'

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(this.url + '/' + id);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(this.url + '/' + id);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  constructor(private http: HttpClient) { }
}
