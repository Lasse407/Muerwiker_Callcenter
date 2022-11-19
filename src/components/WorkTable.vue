<template>
  <div style="width: 300px; height: auto; float: left;">
    <div v-for="(item,index) in getCities()" :key="index">
      <p @click="selectedCity = item, selectedAddress = null" style="background-color: lightblue; margin: 4px; ">{{ item }}</p>
    </div>
  </div>

  <span v-if="selectedCity!= ''">
      <div style="width: 300px; height: auto; float: left;">
    <div v-for="(item, index) in getAddresses()" :key="index"
         style="background-color: lightblue; margin: 4px; width: 300px; height: auto; float: left;">
      <div @click="selectedAddress = item.id">
    <p>{{ item.strasse }}</p>
    <p>{{ item.hausnummer }}</p>
    <p>{{ item.abteilungen }}</p>
</div>
    </div>
</div>
  </span>
  <span v-if="selectedAddress!= ''">
          <div style="width: 300px; height: auto; float: left;">

    <div v-for="(item, index) in getMitarbeiter()" :key="index"
         style="background-color: lightblue; margin: 4px; width: 300px; height: auto; float: left;">
    <p>{{ item.name }}</p>
    <p>{{ item.nummer }}</p>
    </div>
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
            strasse: "testStraße",
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
            nummer: "xxx xxx"
          }, {
            id: 2,
            zuordnungsId: 1,
            name: "Hans Hansen",
            nummer: "xxx xxx"
          }, {
            id: 3,
            zuordnungsId: 2,
            name: "Johann Johannsen",
            nummer: "xxx xxx"
          }, {
            id: 4,
            zuordnungsId: 2,
            name: "Erich Erichsen",
            nummer: "xxx xxx"
          }, {
            id: 5,
            zuordnungsId: 3,
            name: "Michel Michelsen",
            nummer: "xxx xxx"
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