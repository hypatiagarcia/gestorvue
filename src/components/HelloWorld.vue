<template>
  <div class="container mt-4">
    <!-- Encabezado de bienvenida -->
    <div class="text-center mb-4">
      <h1>Bienvenido a la Aplicación de Tareas con Vue</h1>
      <p class="lead">
        Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
      </p>
    </div>

    <!-- Secciones de la aplicación -->
    <div class="row">
      <!-- Sección Añadir Tarea -->
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <p>
              <strong>Añadir Tarea:</strong> ingresar nuevas tareas manualmente.
            </p>
          </div>
        </div>
      </div>

      <!-- Sección Lista de Tareas -->
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <p>
              <strong>Lista de Tareas:</strong> todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.
            </p>
          </div>
        </div>
      </div>

      <!-- Sección Vista Combinada -->
      <div class="col-md-4 mb-3">
        <div class="card">
          <div class="card-body">
            <p>
              <strong>Vista Combinada: </strong> las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage', // Cambié el nombre a 'HomePage' (de varias palabras)
};
</script>

<style scoped>
/* Estilos adicionales */
.card-header h3 {
  font-size: 1.5rem;
}

.card-body p {
  font-size: 1rem;
}
</style>
