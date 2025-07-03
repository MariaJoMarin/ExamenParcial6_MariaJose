import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../models/tarea.model';

@Component({
  selector: 'app-task-list',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {
  @Input() tareas: Tarea[] = [];

  @Output() eliminar = new EventEmitter<number>();
  @Output() completar = new EventEmitter<Tarea>();
  @Output() editarTarea = new EventEmitter<Tarea>();


  onEliminar(id: number) {
    this.eliminar.emit(id);
  }

  onCompletar(tarea: Tarea) {
    this.completar.emit(tarea);
  }

  onEditar(tarea: Tarea) {
  this.editarTarea.emit(tarea);
}

}

