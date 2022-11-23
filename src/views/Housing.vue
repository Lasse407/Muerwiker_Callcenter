<template>
  <header-bar/>

  <housing-table/>
</template>

<script>
import HousingTable from "@/components/HousingTable.vue";
import HeaderBar from "@/components/HeaderBar.vue";
export default {
  name: "Housing",
  components: {HousingTable, HeaderBar}
}
</script>

<style scoped>
@import 'minireset.css';

</style>