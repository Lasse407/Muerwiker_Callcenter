<template>
  <!-- header bar to add above every page -->
  <link rel = "stylesheet" type = "text/css" href = "./src/css/Default.css">
  <div class="topBar">
    <div class="col--1-of-3">
      <router-link to="/">
        <img src="../assets/muerwiker_logo.png" alt="Logo Mürwiker" class="logoMain"/>
      </router-link>
    </div>
    <div class="col--1-of-3 centered header">Callcenter</div>
    <div class="col--1-of-3 right"></div>
  </div>
  <router-link to="/">
    <img src="@/assets/arrow-left.svg" class="mainImg"/>
  </router-link>
</template>

<script>
export default {
  name: "HeaderBar"
}
</script>

<style scoped>

</style>