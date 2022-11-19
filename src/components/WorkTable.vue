<template>
  <div class="block">
    <img src="../assets/briefcase.svg" alt="Stadt" class="blockicon"/>
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
            <p>{{ item.strasse }} {{ item.hausnummer }}</p>
              <p>{{ item.abteilungen }}</p>
          </div>
        </div>
      </div>
  </div>
  <span v-if="selectedAddress!= ''" class="block" style="width: 48%">
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
  name: "WorkTable",
  data() {
    return {
      selectedCity: "",
      selectedAddress: "",
      workData: {
        "arbeitsstaetten": [
          {
            id: 1,
            ort: "Flensburg",
            strasse: "Teststraße",
            hausnummer: "69",
            abteilungen: "Holz, Metall"
          },
          {
            id: 2,
            ort: "Flensburg",
            strasse: "Nudelweg",
            hausnummer: "88",
            abteilungen: "Schleudern, Pumpen"
          },
          {
            id: 3,
            ort: "Niebüll",
            strasse: "Nordseestraße",
            hausnummer: "11",
            abteilungen: "Dies, Das"
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
          }
        ]
      }
    }
  },
  mounted() {
    console.log(this.workData.arbeitsstaetten);
  },
  methods: {
    write() {
      console.log("writing -------------------")
    },
    getCities() {
      var resArr = [];
      this.workData.arbeitsstaetten.forEach((element) => {

        if (!resArr.includes(element.ort)) {

          resArr.push(element.ort)

        }
      })

      return resArr;
    },
    getAddresses() {
      var resArr = [];
      this.workData.arbeitsstaetten.forEach((element) => {
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