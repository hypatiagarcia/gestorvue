<template>
    <div class="combined-view">
      <h2>Lista de Tareas</h2>
      
      <!-- Botón para cargar tareas -->
      <button @click="fetchTasks" class="load-tasks-btn">Cargar Tareas</button>
      
      <!-- Lista de tareas -->
      <div v-for="task in tasks" :key="task.id" class="task-item">
        <span :class="{ completed: task.completed }">{{ task.todo }}</span>
        <div>
          <button @click="toggleTaskCompletion(task)">
            {{ task.completed ? 'Desmarcar' : 'Completar' }}
          </button>
          <button @click="deleteTask(task)">Eliminar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CombinedView',
    data() {
      return {
        tasks: [],  // Aquí debes agregar tu lógica para cargar las tareas
      }
    },
    methods: {
      fetchTasks() {
        // Lógica para obtener tareas desde la API
        fetch('https://dummyjson.com/todos')
          .then(response => response.json())
          .then(data => {
            this.tasks = data.todos;
          })
          .catch(error => console.error('Error fetching tasks:', error));
      },
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
      deleteTask(task) {
        this.tasks = this.tasks.filter(t => t.id !== task.id);
      }
    }
  }
  </script>
  
  <style scoped>
  /* Estilo para la lista de tareas */
  .task-item {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #eee;
  }
  
  /* Estilo para las tareas completadas */
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  
  /* Estilo para el botón de cargar tareas */
  .load-tasks-btn {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 20px;
  }
  
  .load-tasks-btn:hover {
    background-color: #36a078;
  }
  
  /* Estilo para los botones de completar y eliminar */
  button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #f0f0f0;
  }
  
  button:active {
    background-color: #ddd;
  }
  </style>
  