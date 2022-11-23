<template>
  <div class="block">
    <img src="../assets/home.svg" alt="Wohnen" class="blockicon"/>
    <img src="../assets/city-variant.svg" alt="Stadt" class="blockicon"/>
    <h1 class="blockHead">Ort</h1>
    <div v-for="(item,index) in getCities()" :key="index" class="blockElement">
      <p @click="selectedCity = item, selectedAddress = null" >
        {{ item }}</p>
    </div>
  </div>
  <div v-if="selectedCity!= ''" class="block">
    <img src="../assets/routes.svg" alt="Stadt" class="blockicon"/>

    <h1 class="blockHead">Adresse</h1>
    <div >
      <div v-for="(item, index) in getAddresses()" :key="index" class="blockElement">
        <div @click="selectedAddress = item.id">
          <p>
            {{ item.strasse }} {{ item.hausnummer }}
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
    <p>{{ item.name }}</p>
      <p>
        <img src="../assets/phone.svg" alt="PhoneImage" style="width: 24px;height: 24px" class="negative"/>
          {{ item.nummer }}
      </p>
        <a class="mailLink" href="mailto:{{item.mail}}?subject=Anruf&body=Guten Tag, es wurde für Sie angerufen">
          <img src="../assets/email-outline.svg" alt="MailImage" style="width: 24px;height: 24px" class="negative"/>
          {{ item.mail }}
        </a>
    </div>
  </span>
</template>

<script>
export default {
  name: "HousingTable",
  data() {
    return {
      selectedCity: "",
      selectedAddress: "",
      workData: {
        "wohneinrichtungen": [
          {
            id: 1,
            ort: "Flensburg",
            strasse: "Teststraße",
            hausnummer: "69",
            foto:""
          },
          {
            id: 2,
            ort: "Flensburg",
            strasse: "Nudelweg",
            hausnummer: "88",
            foto:""
          },
          {
            id: 3,
            ort: "Niebüll",
            strasse: "Nordseestraße",
            hausnummer: "11",
            foto:""
          },
          {
            id: 4,
            ort: "ohne Ort",
            strasse: "Dienststraße",
            hausnummer: "34",
            foto:""
          }
        ]
      },
      contactData: {
        "mitarbeiter": [
          {
            id: 1,
            zuordnungsId: 1,
            name: "Peter Petersen",
            nummer: "0123 45678998",
            mail: "test.mail@mail.com"
          }, {
            id: 2,
            zuordnungsId: 1,
            name: "Hans Hansen",
            nummer: "0123 45678998",
            mail: "test.mail@mail.com"
          }, {
            id: 3,
            zuordnungsId: 2,
            name: "Johann Johannsen",
            nummer: "0123 45678998",
            mail: "test.mail@mail.com"
          }, {
            id: 4,
            zuordnungsId: 2,
            name: "Erich Erichsen",
            nummer: "0123 45678998",
            mail: "test.mail@mail.com"
          }, {
            id: 5,
            zuordnungsId: 3,
            name: "Michel Michelsen",
            nummer: "0123 45678998",
            mail: "test.mail@mail.com"
          }, {
            id: 6,
            zuordnungsId: 4,
            name: "Marie Mariechen",
            nummer: "0123 45678998",
            mail: "test.mail@mail.com"
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.workData.wohneinrichtungen);
  },
  methods: {
    write() {
      console.log("writing -------------------")
    },
    getCities() {
      var resArr = [];
      this.workData.wohneinrichtungen.forEach((element) => {

        if (!resArr.includes(element.ort)) {

          resArr.push(element.ort)

        }
      })

      return resArr;
    },
    getAddresses() {
      var resArr = [];
      this.workData.wohneinrichtungen.forEach((element) => {
        if (element.ort == this.selectedCity) {
          resArr.push(element)
          console.log("pushed element:")
          console.log(element)
        }
      })
      return resArr;
    },
    getMitarbeiter() {
      var resArr = [];
      this.contactData.mitarbeiter.forEach((element) => {
        if (element.zuordnungsId == this.selectedAddress) {
          resArr.push(element)
          console.log("pushed element:")
          console.log(element)
        }
      })
      return resArr;
    }
  }
}
</script>

<style scoped>

</style>