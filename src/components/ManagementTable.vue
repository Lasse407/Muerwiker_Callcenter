
<template>
  <div v-if="selectedAbteilung == ''" style=" display: flex;justify-content: center">
    <div v-for="(item, index) in data.Abteilungen" >
      <div class="mainBox blockElement" @click="selectedAbteilung = item" >
        <p >{{item.bezeichnung}}</p>
      </div>
    </div>
  </div>

  <div v-if="selectedAbteilung != ''" class="block" >
    <div v-for="(item, index) in data.Abteilungen" >
      <div >
        <p @click="selectedAbteilung = item" class="blockElement" :class="[selectedAbteilung == item ? 'selected' : ''] ">{{item.bezeichnung}}</p>
      </div>
    </div>
  </div>

  <div v-if="selectedAbteilung != '' && getMitarbeiter()!=''">
    <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement" style="width: 50%; float: left; margin-left: 8px">
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

  </div>

</template>

<script>
export default {
  name: "ManagementTable",
  data(){
    return{
      selectedAbteilung:"",
      data:{
        "Abteilungen":[
          {
            id: 1,
            bezeichnung: "Personal",
            notfallnr: "0123 45678998",
          },
          {
            id: 2,
            bezeichnung: "Geschäftsleitung",
            notfallnr: "0123 45678998",
          },
          {
            id: 3,
            bezeichnung: "Finanzen",
            notfallnr: "0123 45678998",
          },
          {
            id: 4,
            bezeichnung: "Betriebsrat",
            notfallnr: "0123 45678998",
          },
          {
            id: 5,
            bezeichnung: "Werkstattrat",
            notfallnr: "0123 45678998",
          }
        ],
        "mitarbeiter":[
      {
        id: 1,
        zuordnungsId: 1,
        name: "Jakob Jakobsen",
        nummer: "0123 45678998",
        mail: "test.mail@mail.com"
      }, {
        id: 2,
        zuordnungsId: 1,
        name: "Nico Nicosen",
        nummer: "0123 45678998",
        mail: "test.mail@mail.com"
      }, {
        id: 3,
        zuordnungsId: 2,
        name: "Gerd Gerhardsen",
        nummer: "0123 45678998",
        mail: "test.mail@mail.com"
      }, {
        id: 4,
        zuordnungsId: 2,
        name: "Jana Janarich",
        nummer: "0123 45678998",
        mail: "test.mail@mail.com"
      }, {
        id: 5,
        zuordnungsId: 3,
        name: "Jan Jansen",
        nummer: "0123 45678998",
        mail: "test.mail@mail.com"
      }, {
        id: 6,
        zuordnungsId: 4,
        name: "Ludger Ludgersen",
        nummer: "0123 45678998",
        mail: "test.mail@mail.com"
      }
        ]
      }
    }
  },
  methods:{
    getMitarbeiter(){
      var resArr = [];
      this.data.mitarbeiter.forEach((element) => {
        if (element.zuordnungsId == this.selectedAbteilung.id) {
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