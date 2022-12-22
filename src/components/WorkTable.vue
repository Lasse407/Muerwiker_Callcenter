<template>
  <div class="block">
    <img src="../assets/briefcase.svg" alt="Arbeit" class="blockicon"/>
    <img src="../assets/city-variant.svg" alt="Stadt" class="blockicon"/>
    <h1 class="blockHead">Ort</h1>
    <div v-for="(item,index) in getCities()" :key="index"  >
      <!-- listing of the cities -->

      <p @click="selectedCity = item, selectedAddress = null" :class="[selectedCity == item ? 'selected' : ''] " class="blockElement">
        {{ item }}</p>
    </div>
  </div>

  <div v-if="selectedCity!= ''" class="block">
    <img src="../assets/routes.svg" alt="Stadt" class="blockicon"/>

    <h1 class="blockHead">Adresse</h1>
      <div >
        <div v-for="(item, index) in getAddresses()" :key="index" >
          <!-- listing of addresses in selected city -->

          <div @click="selectedAddress = item.id" :class="[selectedAddress == item.id ? 'selected' : ''] " class="blockElement">
            <p>{{ item.street }} {{ item.house_number }}
              <span class="tooltipImg" style="float:right; position: relative;">
              <img src="../assets/camera.svg" alt="MailImage" style="width: 48px;" class="negative"/>

              <span class="tooltipImage">
                <img src="../assets/Placeholder_view_vector.svg.png" alt="MailImage" style="width: 360px;float:right" class="negative"/>

              </span>
            </span>
            </p>
              <p v-if="item.department != 'none'" class="abteilung">{{ item.department }}</p>
          </div>
        </div>
      </div>
  </div>
  <span v-if="selectedAddress!= '' && getMitarbeiter() != '' " class="block" style="width: 48%">
          <!-- listing of employees at selected object -->

    <img src="../assets/account.svg" alt="Account" class="blockicon"/>
    <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement">
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
  name: "WorkTable",
  data() {
    return {
      selectedCity: "",
      selectedAddress: "",
      data:[],
      contacts:[],
      zuordnung:[
        // zurodnungen exists as a replacement for our association table

        {
          contactID:9,
          workID:1
        },
        {
          contactID:20,
          workID:1
        },
        {
          contactID:34,
          workID:6
        },
        {
          contactID:73,
          workID:6
        },
        {
          contactID:4,
          workID:2
        },
        {
          contactID:30,
          workID:2
        },
      ]
    }
  },
  mounted() {
    // Call the GET methods when the component is mounted

    this.getData()
    this.getContacts()
  },
  methods: {
    async getData(){
      // getting all work objects
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/works")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.works);
      this.data = response.data.works
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
    getCities() {
      var resArr = [];
      this.data.forEach((element) => {

        if (!resArr.includes(element.location)) {

          resArr.push(element.location
          )

        }
      })

      return resArr;
    },
    getAddresses() {
      var resArr = [];
      this.data.forEach((element) => {
        if (element.location == this.selectedCity) {
          resArr.push(element)
          console.log("pushed element:")
          console.log(element)
        }
      })
      return resArr;
    },
    getMitarbeiter() {

      var resArr = [];

      var zuordnungFiltered = this.zuordnung.filter(element => element.workID == this.selectedAddress)

      zuordnungFiltered.forEach((element) => {
        resArr.push(this.contacts.find((x) => x.id == element.contactID))
      })

      return resArr
    },
  }
}
</script>

<style scoped>

</style>