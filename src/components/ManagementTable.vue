
<template>
  <div v-if="selectedAbteilung == ''" style=" display: block;justify-content: center">
    <div v-for="(item, index) in data" >
      <!-- listing of the areas of management -->

      <div class="mainBox blockElement" @click="selectedAbteilung = item.id" >
        <p >{{item.division}}</p>
      </div>
    </div>
  </div>

  <div v-if="selectedAbteilung != ''" class="block" >
    <div v-for="(item, index) in data" >
      <!-- listing of areas of management on the left side -->
      <div >
        <p @click="selectedAbteilung = item.id" class="blockElement" :class="[selectedAbteilung == item.id ? 'selected' : ''] ">{{item.division}}</p>
      </div>
    </div>
  </div>

  <div v-if="selectedAbteilung != '' && getMitarbeiter()!=''">
    <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement" style="width: 50%; float: left; margin-left: 8px">
      <!-- listing of employees at selected object -->

      <img src="../assets/Avatar.png" alt="Avatar" style="float: left;width: 18%; margin-right: 24px"/>

      <p>{{ item.forename }} {{item.surname}}</p>
      <p>
        <img src="../assets/phone.svg" alt="PhoneImage" style="width: 24px;height: 24px" class="negative"/>
        {{ item.phone_number }}
      </p>
      <a class="mailLink" href="mailto:{{item.email}}?subject=Anruf&body=Guten Tag, es wurde für Sie angerufen">
        <img src="../assets/email-outline.svg" alt="MailImage" style="width: 24px;height: 24px" class="negative"/>
        {{ item.email }}
      </a>
    </div>
    <div class="blockElement block">
      <img src="../assets/alarm-light.svg" alt="Alarm" style="float: left;width: 13%; margin-right: 24px" class="negative"/>
      <p>Notfall Nummer</p>
      <p>0152 123456
      </p>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ManagementTable",
  data(){
    return{
      selectedAbteilung:"",
      data:[],
      contacts:[],

      zuordnung:[
        // zurodnungen exists as a replacement for our association table

        {
          contactID:30,
          divisionID:1
        },
        {
          contactID:47,
          divisionID:1
        },
        {
          contactID:10,
          divisionID:4
        },
        {
          contactID:15,
          divisionID:4
        },
        {
          contactID:19,
          divisionID:3
        },
        {
          contactID:45,
          divisionID:3
        },
        {
          contactID:49,
          divisionID:6
        },
        {
          contactID:16,
          divisionID:7
        },
        {
          contactID:51,
          divisionID:7
        },

      ],
    }
  },
  mounted() {
    // Call the GET methods when the component is mounted

    this.getData()
    this.getContacts()
  },
  methods:{
    getMitarbeiter(){
      var resArr = [];

      var zuordnungFiltered = this.zuordnung.filter(element => element.divisionID == this.selectedAbteilung)

      zuordnungFiltered.forEach((element) => {
        resArr.push(this.contacts.find((x) => x.id == element.contactID))
      })

      return resArr
    },
    async getData(){
      // getting all Management objects
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/admins")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.admins);
      this.data = response.data.admins
    },
    async getContacts(){
      // getting all employees
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/contacts")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.contacts);
      this.contacts = response.data.contacts
    },
  }
}
</script>

<style scoped>

</style>