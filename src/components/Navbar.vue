<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-nav">
          <div>
            <router-link to="/" class="nav-item">Home</router-link>
          </div>
          <div>
            <router-link to="/about" class="nav-item">About</router-link>
          </div>
          <div>
            <router-link to="/contact" class="nav-item">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
