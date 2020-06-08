<template>
  <div>
    <Navbar v-if="$store.state.auth"/>
    <nuxt />
  </div>
</template>


<script>
import Navbar from '~/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>