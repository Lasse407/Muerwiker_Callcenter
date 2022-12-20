<template>
  <div class="block">

      <p @click="selectedAbteilung = 'work'"  :class="[selectedAbteilung == 'work' ? 'selected' : ''] " class="blockElement">
        Arbeiten
      </p>
    <p @click="selectedAbteilung = 'living'"  :class="[selectedAbteilung == 'living' ? 'selected' : ''] " class="blockElement">
      Wohnen
    </p>
    <p @click="selectedAbteilung = 'drivingservice'"  :class="[selectedAbteilung == 'drivingservice' ? 'selected' : ''] " class="blockElement">
      Fahrservice
    </p>
    <p @click="selectedAbteilung = 'carecenter'"  :class="[selectedAbteilung == 'work' ? 'carecenter' : ''] " class="blockElement">
      TaFö
    </p>
    <p @click="selectedAbteilung = 'administration'"  :class="[selectedAbteilung == 'work' ? 'administration' : ''] " class="blockElement">
      Stab
    </p>
    <p></p>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "AdminTable",
  data(){
    return{
      selectedAbteilung:"",
      data:{
        "work":[],
        "living":[],
        "drivingservice":[],
        "carecenter":[],
        "administration":[],
        "contacts":[]
      }
    }
  },
  created() {
       this.try();
  },
  methods:{
    async try() {
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/works")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response);
    },
    getWork(){

    },
    getLiving(){

    },
    getDrivingService(){

    },
    getCareCenter(){

    },
    getAdmin(){

    },
    getContacts(abteilungId){

    }
  }
}
</script>

<style scoped>

</style>