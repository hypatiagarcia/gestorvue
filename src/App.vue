<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Mi Aplicación</router-link> <!-- Nombre de la aplicación, puedes cambiar el texto -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/about" class="nav-link" active-class="active">Vista Combinada</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/addtask" class="nav-link" active-class="active">Agregar Tarea</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/combined" class="nav-link" active-class="active">Lista de Tareas</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view/>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  margin-bottom: 30px;
}

nav .navbar-nav .nav-link {
  font-weight: bold;
  color: #d1d1d1;  
}

nav .navbar-nav .nav-link.active {
  color: #42b983; 
}
.navbar-dark .navbar-toggler-icon {
  background-color: #42b983; 
}

.navbar {
  background-color: #343a40; 
}
.navbar .navbar-brand {
  color: #d1d1d1; 
}

.navbar .navbar-brand:hover {
  color: #42b983; 
}
</style>
