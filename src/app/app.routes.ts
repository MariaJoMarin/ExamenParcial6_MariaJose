import { Routes } from '@angular/router';
import { Tareas } from './tareas/tareas';

export const routes: Routes = [
    { path: 'tareas', component: Tareas },  
    { path: '', redirectTo: '/tareas',pathMatch: 'full' },
];
