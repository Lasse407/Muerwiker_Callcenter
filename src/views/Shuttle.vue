<template>
  <header-bar/>
<shuttle-table/>

</template>

<script>
import ShuttleTable from "@/components/ShuttleTable.vue";
import HeaderBar from "@/components/HeaderBar.vue";
export default {
  name: "Shuttle",
  components: {HeaderBar, ShuttleTable}
}
</script>

<style scoped>
@import 'minireset.css';

</style>