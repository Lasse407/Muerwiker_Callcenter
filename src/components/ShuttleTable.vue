<template>
  <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement block" style="width: 90%">
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

</template>

<script>
export default {
  name: "ShuttleTable",
  data(){
    return{
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
  methods:{
    getMitarbeiter(){
      return this.contactData.mitarbeiter
    }
  }
}
</script>

<style scoped>

</style>