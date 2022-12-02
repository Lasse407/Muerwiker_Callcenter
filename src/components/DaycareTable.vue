<template>
  <div class="block">
    <img src="../assets/hand-heart-outline.svg" alt="Tafö" class="blockicon"/>
    <img src="../assets/routes.svg" alt="Wegweiser" class="blockicon"/>
    <h1 class="blockHead">TaFö</h1>
    <div v-for="(item,index) in getTafoe()" :key="index"  >
      <p @click="selectedtafoe = item" :class="[selectedtafoe == item ? 'selected' : ''] " class="blockElement">
        {{ item.strasse }}
        <span class="tooltipImg" style="float:right; position: relative;">
              <img src="../assets/camera.svg" alt="MailImage" style="width: 48px;" class="negative"/>

              <span class="tooltipImage">
                <img src="../assets/Placeholder_view_vector.svg.png" alt="MailImage" style="width: 360px;float:right" class="negative"/>

              </span>
            </span>
      </p>
    </div>
  </div>

  <span v-if="selectedtafoe!= '' && getMitarbeiter() != '' " class="block" style="width: 48%">

    <img src="../assets/account.svg" alt="Account" class="blockicon"/>
    <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement">
      <img src="../assets/Avatar.png" alt="Avatar" style="float: left;width: 18%; margin-right: 24px"/>
    <p>{{ item.name }}</p>
      <p>
        <img src="../assets/phone.svg" alt="PhoneImage" style="width: 24px;height: 24px;" class="negative"/>
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
  name: "DaycareTable",
  data() {
    return {
      selectedtafoe: "",
      tafoeData: {
        "tagesforderstaetten": [
          {
            id: 1,
            strasse: "Teststraße",
          },
          {
            id: 2,
            strasse: "Nudelweg"
          },
          {
            id: 3,
            strasse: "Nordseestraße",

          },
          {
            id: 4,
            strasse: "Dienststraße",

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
  },
  methods: {
    write() {
      console.log("writing -------------------")
    },
    getTafoe() {
      var resArr = [];
      this.tafoeData.tagesforderstaetten.forEach((element) => {
          resArr.push(element)
          console.log("pushed element:")
          console.log(element)
      })
      return resArr;
    },
    getMitarbeiter() {
      var resArr = [];
      this.contactData.mitarbeiter.forEach((element) => {
        if (element.zuordnungsId == this.selectedtafoe.id) {
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