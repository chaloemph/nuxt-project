<template>
  <nav class="nav">
    <div class="container">
        <div class="logo">
            <nuxt-link class="logo text-lg" :to="{name: 'index'}">
                Nuxt Fundamentals
            </nuxt-link>
            <span class="subheader">A Vue School course</span>
        </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 70px;
    font-weight: lighter;
    letter-spacing: 0.5px;
  }
  .nav .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .nav .logo a {
      text-decoration: none;
      font-size: 2rem;
  }
  .nav .logo .subheader {
    opacity: 0.70;
    font-size: 0.9rem;
    color: white;
  }
  .nav .nav-content {
    font-size: 1rem;
  }
  .nav-content ul {
    display: flex;
    list-style: none;
  }
  .nav-content ul li {
    padding: 2px 10px;
  }
  .nav-content ul li:not(:first-of-type) {
    border-left: 1px solid rgb(255, 255, 255, 0.2);
  }
</style>