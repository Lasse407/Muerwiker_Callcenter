<template>
  <div class="block">
    <img src="../assets/briefcase.svg" alt="Arbeit" class="blockicon"/>
    <img src="../assets/city-variant.svg" alt="Stadt" class="blockicon"/>
    <h1 class="blockHead">Ort</h1>
    <div v-for="(item,index) in getCities()" :key="index"  >
      <p @click="selectedCity = item, selectedAddress = null" :class="[selectedCity == item ? 'selected' : ''] " class="blockElement">
        {{ item }}</p>
    </div>
  </div>

  <div v-if="selectedCity!= ''" class="block">
    <img src="../assets/routes.svg" alt="Stadt" class="blockicon"/>

    <h1 class="blockHead">Adresse</h1>
      <div >
        <div v-for="(item, index) in getAddresses()" :key="index" >
          <div @click="selectedAddress = item.id" :class="[selectedAddress == item.id ? 'selected' : ''] " class="blockElement">
            <p>{{ item.strasse }} {{ item.hausnummer }}
              <span class="tooltipImg" style="float:right; position: relative;">
              <img src="../assets/camera.svg" alt="MailImage" style="width: 48px;" class="negative"/>

              <span class="tooltipImage">
                <img src="../assets/Placeholder_view_vector.svg.png" alt="MailImage" style="width: 360px;float:right" class="negative"/>

              </span>
            </span>
            </p>
              <p class="abteilung">{{ item.abteilungen }}</p>
          </div>
        </div>
      </div>
  </div>
  <span v-if="selectedAddress!= '' && getMitarbeiter() != '' " class="block" style="width: 48%">

    <img src="../assets/account.svg" alt="Account" class="blockicon"/>
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
            strasse: "Treeneweg",
            hausnummer: "",
            abteilungen: "Besen und Bürsten, LebensArt, Verpackung"
          },
          {
            id: 2,
            ort: "Flensburg",
            strasse: "Gewerbegrund",
            hausnummer: "",
            abteilungen: "Metall, Schlosserei, Verpackung, Montage"
          },
          {
            id: 3,
            ort: "Flensburg",
            strasse: "Raiffeisenstraße",
            hausnummer: "",
            abteilungen: "Werkstatt Garten, RabenHolz, Kaminholz, Gartenbau"
          },
          {
            id: 4,
            ort: "ohne Ort",
            strasse: "Bildung und Begleitung",
            hausnummer: "",
            abteilungen: "Berufliche Bildung, Schule, Begleitung, Begleitender Dienst, Arbeitsamt, Arbeitsagentur, Ausbildung"
          }
        ]
      },
      contactData: {
        "mitarbeiter": [
          {
            id: 1,
            zuordnungsId: 1,
            name: "Sandra Bier",
            nummer: "+49(461)50306249",
            mail: "bier@muerwiker-gruppe.de"
          }, {
            id: 2,
            zuordnungsId: 1,
            name: "Jan Euhus",
            nummer: "+49(461)50306714",
            mail: "euhus@muerwiker-gruppe.de"
          }, {
            id: 3,
            zuordnungsId: 2,
            name: "Jörg Köster",
            nummer: "+49(461)50306771",
            mail: "köster@muerwiker-gruppe.de"
          }, {
            id: 4,
            zuordnungsId: 2,
            name: "Kirsten Feddersen",
            nummer: "+49(461)50306257",
            mail: "k.feddersen@muerwiker-gruppe.de"
          }, {
            id: 5,
            zuordnungsId: 3,
            name: "Andreas Andresen",
            nummer: "0176-11119271",
            mail: "a.andresen@muerwiker-gruppe.de"
          }, {
            id: 6,
            zuordnungsId: 3,
            name: "Stefan Ingwertsen",
            nummer: "0176-11119262",
            mail: "ingwertsen@muerwiker-gruppe.de"
          }, {
            id: 7,
            zuordnungsId: 4,
            name: "Ulrike Brandt",
            nummer: "0176-11119252",
            mail: "u.brandt@muerwiker-gruppe.de"
          }, {
            id: 8,
            zuordnungsId: 4,
            name: "Timo Petersen",
            nummer: "49(461)50306303",
            mail: "timo.petersen@muerwiker-gruppe.de"
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
    },

  }
}
</script>

<style scoped>

</style>