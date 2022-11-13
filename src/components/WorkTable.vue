<template>
  <p>{{ nudel  }}</p>
  <div v-for="(item,index) in workData.arbeitsstaetten" :key="index">
    {{item.strasse}}
  </div>
</template>

<script>

export default {
  name: "WorkTable",
  data(){
    return {
      nudel: "nudelauflauf",
      workData:{
       "arbeitsstaetten":[
           {
            id:1,
            ort:"Flensburg",
            strasse:"testStraße",
            hausnummer:"69",
            abteilungen:"Holz, Metall"
          },
          {
            id:2,
            ort:"Flensburg",
            strasse:"Nudelweg",
            hausnummer:"88",
            abteilungen:"Schleudern, Pumpen"
          }
        ]
      }
    }
  },
  mounted(){
      console.log(this.workData.arbeitsstaetten);
  },
  methods:{

  }
}
</script>

<style scoped>

</style>