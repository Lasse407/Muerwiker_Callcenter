<template>
  <div class="block">
    <img src="../assets/home.svg" alt="Wohnen" class="blockicon"/>
    <img src="../assets/city-variant.svg" alt="Stadt" class="blockicon"/>
    <h1 class="blockHead">Ort</h1>
    <div v-for="(item,index) in getCities()" :key="index" >
      <!-- listing of the cities -->
      <p @click="selectedCity = item, selectedAddress = null" class="blockElement" :class="[selectedCity == item ? 'selected' : '']">
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
          <p>
            {{ item.street }}
            <span class="tooltipImg" style="float:right; position: relative;">
              <img src="../assets/camera.svg" alt="MailImage" style="width: 48px;" class="negative"/>

              <span class="tooltipImage">
                <img src="../assets/Placeholder_view_vector.svg.png" alt="MailImage" style="width: 360px;float:right" class="negative"/>

              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  <span v-if="selectedAddress!= '' && getMitarbeiter() != ''" class="block" style="width: 48%">
    <img src="../assets/account.svg" alt="Stadt" class="blockicon"/>

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
  name: "HousingTable",
  data() {
    return {
      selectedCity: "",
      selectedAddress: "",
      data:[],
      contacts:[],
      zuordnung:[
          // zurodnungen exists as a replacement for our association table
        {
          contactID:26,
          livingID:11
        },
        {
          contactID:39,
          livingID:11
        },
        {
          contactID:27,
          livingID:12
        },
        {
          contactID:12,
          livingID:12
        },
        {
          contactID:38,
          livingID:1
        },
        {
          contactID:5,
          livingID:1
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
    getCities() {
      // filtering every City from objects, not adding duplicates
      var resArr = [];
      this.data.forEach((element) => {

        if (!resArr.includes(element.location)) {

          resArr.push(element.location)

        }
      })

      return resArr;
    },
    getAddresses() {
      //filtering addresses where city equals selected city
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
      // filtering the employees who work for the object at selected address
      var resArr = [];

      var zuordnungFiltered = this.zuordnung.filter(element => element.livingID == this.selectedAddress)

      zuordnungFiltered.forEach((element) => {
        resArr.push(this.contacts.find((x) => x.id == element.contactID))
      })

      return resArr
    },
    async getData(){
      //getting "livings" data from our API
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/livings")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.livings);
      this.data = response.data.livings
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