<template>
  <div class="block" style="width: 80%">
  <img src="@/assets/car-estate.svg" class="blockicon"/>

  <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement block" style="width: 90%;">
    <!-- listing of the shuttle employees, since city isn't relevant -->

    <img src="../assets/Avatar.png" alt="Avatar" style="float: left;width: 18%; margin-right: 24px"/>
    <p>{{ item.forename }} {{ item.surname }}</p>
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
  name: "ShuttleTable",
  data(){
    return{
      contacts:[],
      data:[],
      id:1,
      zuordnung:[
        // zurodnungen exists as a replacement for our association table

        {
          contactID:37,
        },
        {
          contactID:50,
        },
      ],
    }
  },
  created() {
    // Call the GET methods when the component is created
    this.getData()
    this.getContacts()
  },
  methods:{
    async getData(){
      //getting the one shuttle object
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/driving-services")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.drivingServices);
      this.data = response.data.drivingServices
    },
    async getContacts(){

      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/contacts")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.contacts);
      this.contacts = response.data.contacts
    },
    getMitarbeiter() {

      var resArr = [];

      this.zuordnung.forEach((element) => {
        resArr.push(this.contacts.find((x) => x.id == element.contactID))
      })
      console.log(resArr)

      return resArr
    },
  }
}
</script>

<style scoped>

</style>