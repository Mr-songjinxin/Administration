<template>
  <div id="app">
    <!-- <login></login> -->
    <router-view/>
  </div>
</template>

<script>
import login from '@/components/login/Login'
export default {
  name: 'App',
  components:{
    login
  }
}
</script>

<style>

</style>
