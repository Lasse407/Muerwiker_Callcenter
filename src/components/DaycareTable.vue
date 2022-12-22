<template>
  <div class="block">
    <img src="../assets/hand-heart-outline.svg" alt="Tafö" class="blockicon"/>
    <img src="../assets/routes.svg" alt="Wegweiser" class="blockicon"/>
    <h1 class="blockHead">TaFö</h1>
    <div v-for="(item,index) in data" :key="index"  >
      <!-- listing of the daycare locations -->

      <p @click="selectedtafoe = item.id" :class="[selectedtafoe == item.id ? 'selected' : ''] " class="blockElement">
        {{ item.street }}
        <span class="tooltipImg" style="float:right; position: relative;">
              <img src="../assets/camera.svg" alt="MailImage" style="width: 48px;" class="negative"/>

              <span class="tooltipImage">
                <img src="../assets/Placeholder_view_vector.svg.png" alt="MailImage" style="width: 360px;float:right" class="negative"/>

              </span>
            </span>
        <p v-if="item.location != 'none'" class="abteilung">{{ item.location }}</p>
      </p>

    </div>

  </div>

  <span v-if="selectedtafoe!= '' && getMitarbeiter() != '' " class="block" style="width: 48%">

    <img src="../assets/account.svg" alt="Account" class="blockicon"/>
    <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement">
                <!-- listing of employees at selected object -->

      <img src="../assets/Avatar.png" alt="Avatar" style="float: left;width: 18%; margin-right: 24px"/>
    <p>{{ item.forename }} {{ item.surname }}</p>
      <p>
        <img src="../assets/phone.svg" alt="PhoneImage" style="width: 24px;height: 24px;" class="negative"/>
          {{ item.phone_number }}
      </p>
        <a class="mailLink" href="mailto:{{item.mail}}?subject=Anruf&body=Guten Tag, es wurde für Sie angerufen">
          <img src="../assets/email-outline.svg" alt="MailImage" style="width: 24px;height: 24px" class="negative"/>
          {{ item.email }}
        </a>

    </div>
        <div class="blockElement">
      <img src="../assets/alarm-light.svg" alt="Alarm" style="float: left;width: 13%; margin-right: 24px" class="negative"/>
    <p>Notfall Nummer</p>
      <p>0152 123456
      </p>
    </div>
  </span>

</template>

<script>
import axios from "axios";

export default {
  name: "DaycareTable",
  data() {
    return {
      data:[],
      contacts:[],
      selectedtafoe: "",
      zuordnung:[
        // zurodnungen exists as a replacement for our association table

        {
          contactID:13,
          daycareID:1
        },
        {
          contactID:13,
          daycareID:2
        },
      ],
    }
  },
  mounted() {
    // Call the GET methods when the component is mounted

    this.getData()
    this.getContacts()
  },
  methods: {
    getMitarbeiter(){
      var resArr = [];

      var zuordnungFiltered = this.zuordnung.filter(element => element.daycareID == this.selectedtafoe)

      zuordnungFiltered.forEach((element) => {
        resArr.push(this.contacts.find((x) => x.id == element.contactID))
      })

      return resArr
    },

    async getData(){
      //getting all care center objects
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/care-centers")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.careCenters);
      this.data = response.data.careCenters
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