<template>
<header-bar/>
  <management-table/>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import ManagementTable from "@/components/ManagementTable.vue";

export default {
  name: "Management",
  components: {ManagementTable, HeaderBar}
}
</script>

<style scoped>
@import 'minireset.css';

</style>