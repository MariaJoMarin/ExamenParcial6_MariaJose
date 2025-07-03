<h1 align="center"> ExamenParcial6_MariaJose </h1> 

## ✅ Descripción
Este es el frontend del proyecto de lista de tareas personales, construido con Angular, diseñado para interactuar con una API REST desarrollada en .NET Core llamada API_ExamenParcial6_MariaJose. 
Permite ver, crear, editar, completar y eliminar tareas. El diseño está orientado a la simplicidad y experiencia de usuario, con una tabla estilizada y formularios dinámicos.

## :hammer: Funcionamiento

- **Tabla:** Se encuenta una tabla donde se muestre el id, el titulo, la descripción, la fecha limite, el estado y la prioridad de cada tarea.

    💭 El esatdo puede ser completada o pendiente.

    💭 Las prioridades son 1 = Alta, 2 = Media, 3 = Baja.

- ✅ **Completar tarea:** Permite cambiar el estado de pediente a completada.
- 🗑️ **Eliminar tarea:** Permite eliminar la tarea.
- ✏️ **Editar tarea:** Abre un formulario que te permite editar elemetos de una tarea como el  el titulo, la descripción, la fecha limite  o la prioridad.
- **Crear tarea:** Se da al boton +Nueva Tarea y este desplegara un modal con un formulario con los elementos para ingresar una nueva tarea: titulo,descripción,fecha limite y la prioridad.

## 🌐 Tecnologías Utilizadas
- Angular
- Bootstrap (íconos y estilos)
- Servicios HTTP (HttpClient)

## 💡 Componentes
- `TareasComponent`: Componente principal que contiene el formulario para agregar o editar tareas y el modal. También se encarga de cargar todas las tareas y manejar las acciones del usuario.
- `TaskListComponent`: Tabla que muestra las tareas. Emite eventos para completar, eliminar o editar una tarea.

## 🔌 Conexión con la API
- private apiUrl = 'https://localhost:7192/api/Tareas';

## 📷 Capturas de pantalla 

Captura de la lista de tareas 
![Captura Lista Tareas Angular Examen](https://github.com/user-attachments/assets/1bf963d7-1b6b-4933-8d34-5e1f0341b35f)


Captura de formulario de creación de tareas

![Captura Crear Tarea Angular Examen](https://github.com/user-attachments/assets/845f9557-ab49-48fa-9bb1-ff76a112580f)

Captura de formulario de editar de tareas

![Captura Editar Tarea Angular Examen](https://github.com/user-attachments/assets/b23ac514-a1fe-4a10-b776-78d4d3bea36f)

Demostración de cómo se marca una tarea como completada

![Captura  Tarea Pendiente Angular Examen](https://github.com/user-attachments/assets/231a9e06-d0af-4153-bf5f-f7f942f2cdb0)

![Captura  Tarea Completada Angular Examen](https://github.com/user-attachments/assets/4f09c494-5516-438a-9510-ff1adb58ac08)





