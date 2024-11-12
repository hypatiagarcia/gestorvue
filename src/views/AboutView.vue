<template>
  <div class="add-task-container">
      <h2 class="text-center mb-4">Añadir Tarea</h2>
      <div class="input-group mb-3">
          <input 
              v-model="newTask" 
              @keyup.enter="addTask" 
              placeholder="Añadir nueva tarea" 
              class="form-control"
          />
          <button @click="addTask" class="btn btn-primary">Añadir</button>
      </div>

      <!-- Mostrar tareas obtenidas de la API -->
      <div v-if="tasks.length > 0" class="task-list">
          <div v-for="task in tasks" :key="task.id" class="task-item">
              <span :class="{ completed: task.completed }">{{ task.todo }}</span>
              <div>
                  <button @click="toggleTaskCompletion(task)" class="btn btn-sm" :class="task.completed ? 'btn-secondary' : 'btn-success'">
                      {{ task.completed ? 'Desmarcar' : 'Completar' }}
                  </button>
                  <button @click="deleteTask(task)" class="btn btn-sm btn-danger ms-2">Eliminar</button>
              </div>
          </div>
      </div>

      <!-- Sección: Extraer Tareas de la API -->
      <div class="mt-4">
          <h2>Extraer Tareas de la API</h2>
          <button @click="fetchTasks" class="btn btn-primary">Obtener Tareas</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  data() {
      return {
          newTask: "", 
          tasks: [], 
      };
  },
  methods: {
      addTask() {
          if (this.newTask.trim() === "") return;

          const newTask = {
              todo: this.newTask,
              completed: false,
              id: Date.now(),
          };

          this.tasks.unshift(newTask);
          this.newTask = ""; 
      },

      deleteTask(task) {
          this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },

      toggleTaskCompletion(task) {
          task.completed = !task.completed;
      },


      fetchTasks() {
          fetch('https://dummyjson.com/todos')
              .then(response => response.json())
              .then(data => {
                  this.tasks = data.todos;  
              })
              .catch(error => {
                  console.error("Error al obtener las tareas:", error);
              });
      }
  }
};
</script>

<style scoped>
.add-task-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  margin-bottom: 15px;
}

.task-list {
  margin-top: 20px;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.completed {
  text-decoration: line-through;
  color: gray;
}

.btn-sm {
  padding: 5px 10px;
}

.ms-2 {
  margin-left: 10px;
}
</style>
