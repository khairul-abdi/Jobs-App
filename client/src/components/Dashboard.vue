<template>
  <div class="dashboard">
    <h1>Dashboard sdsd</h1>
  </div>
</template>

<script>
import jwtDecode from 'jwt-decode'

export default {  
  data() {
    const token = localStorage.usertoken
    const decoded = jwtDecode(token)
    return {
      username: decoded.username,
      password: decoded.password,
    }
  }
}
</script>

<style lang="css" scoped>
.dashboard {
  text-align: center;
}
</style>