import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarea } from '../../models/tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'https://localhost:7192/api/Tareas';

  constructor(private http: HttpClient) { }



    getAll() {
    return this.http.get<Tarea[]>(this.apiUrl);
  }
  create(tarea: Tarea) {
    return this.http.post<Tarea>(this.apiUrl, tarea);
  }
  update(tarea: Tarea) {
    return this.http.put<Tarea>(`${this.apiUrl}/${tarea.id}`, tarea);
  }
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }


}
