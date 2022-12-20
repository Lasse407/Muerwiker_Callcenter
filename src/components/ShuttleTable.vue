<template>
  <div class="block" style="width: 80%">
  <img src="@/assets/car-estate.svg" class="blockicon"/>

  <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement block" style="width: 90%;">
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
    <div class="blockElement block">
      <img src="../assets/alarm-light.svg" alt="Alarm" style="float: left;width: 13%; margin-right: 24px" class="negative"/>
      <p>Notfall Nummer</p>
      <p>0152 123456
      </p>
    </div>
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
            name: "Sebastian Westphal",
            nummer: "49(160)90750867",
            mail: "westphal@fds-mail.de"
          }, {
            id: 2,
            zuordnungsId: 1,
            name: "Olivia Münster",
            nummer: "49(151)16257288",
            mail: "muenster@fds-mail.de"
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