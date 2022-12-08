<template>
  <div class="block">
    <img src="../assets/home.svg" alt="Wohnen" class="blockicon"/>
    <img src="../assets/city-variant.svg" alt="Stadt" class="blockicon"/>
    <h1 class="blockHead">Ort</h1>
    <div v-for="(item,index) in getCities()" :key="index" >
      <p @click="selectedCity = item, selectedAddress = null" class="blockElement" :class="[selectedCity == item ? 'selected' : '']">
        {{ item }}</p>
    </div>
  </div>
  <div v-if="selectedCity!= ''" class="block">
    <img src="../assets/routes.svg" alt="Stadt" class="blockicon"/>

    <h1 class="blockHead">Adresse</h1>
    <div >
      <div v-for="(item, index) in getAddresses()" :key="index" >
        <div @click="selectedAddress = item.id" :class="[selectedAddress == item.id ? 'selected' : ''] " class="blockElement">
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
      <img src="../assets/Avatar.png" alt="Avatar" style="float: left;width: 18%; margin-right: 24px"/>
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
            ort: "Niebüll",
            strasse: "Buchenweg",
            hausnummer: "",
            foto:""
          },
          {
            id: 2,
            ort: "Niebüll",
            strasse: "Schreberweg",
            hausnummer: "",
            foto:""
          },
          {
            id: 3,
            ort: "Flensburg",
            strasse: "Terassenstraße",
            hausnummer: "",
            foto:""
          }
        ]
      },
      contactData: {
        "mitarbeiter": [
          {
            id: 1,
            zuordnungsId: 1,
            name: "Stefan Holst",
            nummer: "+49(461)50306648",
            mail: "holst@muerwiker-gruppe.de"
          }, {
            id: 2,
            zuordnungsId: 1,
            name: "Ela Nissen",
            nummer: "+49(461)50306608",
            mail: "e.nissen@muerwiker-gruppe.de"
          }, {
            id: 3,
            zuordnungsId: 2,
            name: "Jörg Homberg",
            nummer: "+49(461)50306292",
            mail: "homberg@muerwiker-gruppe.de"
          }, {
            id: 4,
            zuordnungsId: 2,
            name: "Frank Brodersen",
            nummer: "+49(461)50306633",
            mail: "brodersen@muerwiker-gruppe.de"
          }, {
            id: 5,
            zuordnungsId: 3,
            name: "Niklas Neugebauer",
            nummer: "+49(461)50306556",
            mail: "neugebauer@muerwiker-gruppe.de"
          }, {
            id: 6,
            zuordnungsId: 3,
            name: "Gerd Bänsch",
            nummer: "49(461)50306902",
            mail: "baensch@muerwiker-gruppe.de"
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