<template>
  <header-bar/>
  <work-table/>
</template>

<script>
import WorkTable from "@/components/WorkTable.vue";
import HeaderBar from "@/components/HeaderBar.vue";

export default {
  name: "Work",
  components: {HeaderBar, WorkTable}

}
</script>

<style scoped>
@import 'minireset.css';

</style>