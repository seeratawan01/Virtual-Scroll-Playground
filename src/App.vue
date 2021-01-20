<template>
  <div id="app">
    <nav id="navigator" class="navbar" >
      <ul class="navbar-nav">
        <li> <router-link exact to="/">Home</router-link></li>
        <li> <router-link  to="/Virtual-Scroll-Playground/">Virtual Scroll List</router-link></li>
        <li> <router-link to="/Virtual-Scroll-Playground/vue-virtual-scroller">Virtual Scroll Scroller</router-link></li>
      </ul>
    </nav>


    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 2rem;
}

nav {
  padding: 8px;
}

nav ul {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 6px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
