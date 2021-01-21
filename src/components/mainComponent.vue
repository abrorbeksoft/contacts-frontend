<template>
  <div id="mainComponent">
    <h1>Main</h1>
    <router-link tag="li" to="/login" ><a>Login</a></router-link>
    <router-link tag="li" to="/register" ><a>Register</a></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'mainComponent'
}
</script>
