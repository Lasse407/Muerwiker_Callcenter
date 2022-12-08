<template>
  <header-bar/>
  <admin-table/>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import AdminTable from "@/components/AdminTable.vue";
export default {
  name: "Administration",
  components: {AdminTable, HeaderBar}
}
</script>

<style scoped>
@import 'minireset.css';

</style>