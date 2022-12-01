<template>
<header-bar/>
<daycare-table/>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import DaycareTable from "@/components/DaycareTable.vue";
export default {
  name: "Daycare",
  components: {DaycareTable, HeaderBar}
}
</script>

<style scoped>
@import 'minireset.css';

</style>