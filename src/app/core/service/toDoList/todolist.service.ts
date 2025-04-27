import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpClient:HttpClient) { }


  addTodo(data:object):Observable<any>{
    return this.httpClient.post(`${environment.baseUrl}todos` , data)
  }

  markCompleted(data:object):Observable<any>{
    return this.httpClient.put(`${environment.baseUrl}todos`, data)
  }

  deleteTodo(todoId:string):Observable<any>{
    return this.httpClient.delete(`${environment.baseUrl}todos`, 
      {
        body: { todoId }
      }
    )
  }


  getAllTodo(id:string):Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}todos/${id}`)
  }

  getApiKey():Observable<any>{
    return this.httpClient.get(`${environment.baseUrl}getApiKey`)
  }

}
