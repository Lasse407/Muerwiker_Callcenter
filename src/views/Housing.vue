<template>
  <link rel = "stylesheet" type = "text/css" href = "./src/css/Default.css">
  <div class="topBar">
    <div class="col--1-of-3"><img src="../assets/muerwiker_logo.png" alt="Logo Mürwiker" class="logoMain"></div>
    <div class="col--1-of-3 centered header">Callcenter</div>
    <div class="col--1-of-3 right"></div>
  </div>

  <router-link to="/">
    <img src="@/assets/arrow-left.svg" class="mainImg"/>
  </router-link>

</template>

<script>
export default {
  name: "Housing"
}
</script>

<style scoped>
@import 'minireset.css';

</style>