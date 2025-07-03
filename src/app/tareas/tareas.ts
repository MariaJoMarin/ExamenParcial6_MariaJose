import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarea } from '../models/tarea.model';
import { TareaService } from '../services/tareas/tarea-service';
import { TaskListComponent } from '../task-list/task-list';



@Component({
  selector: 'app-tareas',

 standalone: true, 
  imports: [CommonModule,FormsModule,TaskListComponent],
  templateUrl: './tareas.html',
  styleUrls: ['./tareas.css']
})
export class Tareas implements OnInit{
  
     tareas: Tarea[] = [];

  mostrarModal: boolean = false;

  modoEdicion: boolean = false;


  nuevaTarea: Tarea = {
    titulo: '',
    descripcion: '',
    fechaLimite: '',
    estado: false,
    prioridad: 3
  };

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.loadTareas();
  }

  loadTareas() {
    this.tareaService.getAll().subscribe(data => {
      this.tareas = data;
    });
  }

  agregarTarea() {
    this.tareaService.create(this.nuevaTarea).subscribe(() => {
      this.loadTareas();
      this.nuevaTarea = {
        titulo: '',
        descripcion: '',
        fechaLimite: '',
        estado: false,
        prioridad: 3
      };
    });
  }



  eliminarTarea(id: number) {
    this.tareaService.delete(id).subscribe(() => {
      this.loadTareas();
    });
  }

  marcarComoCompletada(tarea: Tarea) {
    tarea.estado = true;
    this.tareaService.update(tarea).subscribe(() => {
      this.loadTareas();
    });
  }

  editarTarea(tarea: Tarea) {
  this.nuevaTarea = { ...tarea }; 
  this.modoEdicion = true;
  this.mostrarModal = true;
}

 actualizarTarea() {
  if (this.nuevaTarea.id !== undefined) {
    this.tareaService.update(this.nuevaTarea).subscribe(() => {
      this.loadTareas();
      this.resetFormulario();
    });
  }
}

resetFormulario() {
  this.nuevaTarea = {
    titulo: '',
    descripcion: '',
    fechaLimite: '',
    estado: false,
    prioridad: 3
  };
  this.modoEdicion = false;
  this.mostrarModal = false;
}


}



  



