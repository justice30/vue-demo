<template>
  <div class="navbar">
    <ul id="main">
      <li><router-link  to="/" >根目录</router-link></li>
      <li><router-link  to="/home">主页</router-link></li>
      <li><router-link  to="/route">路由页</router-link></li>
      <li><router-link  to="/hello-world">hello-world</router-link></li>
      <li><router-link  to="/pdf">PDF预览</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Route'
}
</script>

<style scoped>

</style>
