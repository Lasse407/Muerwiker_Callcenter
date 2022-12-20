
<template>
  <div v-if="selectedAbteilung == ''" style=" display: block;justify-content: center">
    <div v-for="(item, index) in data" >
      <div class="mainBox blockElement" @click="selectedAbteilung = item.id" >
        <p >{{item.division}}</p>
      </div>
    </div>
  </div>

  <div v-if="selectedAbteilung != ''" class="block" >
    <div v-for="(item, index) in data.admins" >
      <div >
        <p @click="selectedAbteilung = item.id" class="blockElement" :class="[selectedAbteilung == item.id ? 'selected' : ''] ">{{item.division}}</p>
      </div>
    </div>
  </div>

  <div v-if="selectedAbteilung != '' && getMitarbeiter()!=''">
    <div v-for="(item, index) in getMitarbeiter()" :key="index" class="blockElement" style="width: 50%; float: left; margin-left: 8px">
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
    <div class="blockElement block">
      <img src="../assets/alarm-light.svg" alt="Alarm" style="float: left;width: 13%; margin-right: 24px" class="negative"/>
      <p>Notfall Nummer</p>
      <p>0152 123456
      </p>
    </div>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ManagementTable",
  data(){
    return{
      selectedAbteilung:"",
      data:[],
      contacts:[],

      zuordnung:[
        {
          contactID:30,
          divisionID:1
        },
        {
          contactID:47,
          divisionID:1
        },
        {
          contactID:10,
          divisionID:4
        },
        {
          contactID:15,
          divisionID:4
        },
        {
          contactID:19,
          divisionID:3
        },
        {
          contactID:45,
          divisionID:3
        },
        {
          contactID:49,
          divisionID:6
        },
        {
          contactID:16,
          divisionID:7
        },
        {
          contactID:51,
          divisionID:7
        },

      ],
      datas:{
        "Abteilungen":[
          {
            id: 1,
            bezeichnung: "Personal",
            notfallnr: "0151-18857333",
          },
          {
            id: 2,
            bezeichnung: "Geschäftsleitung",
            notfallnr: "0151-18857333",
          },
          {
            id: 3,
            bezeichnung: "Finanzen",
            notfallnr: "0151-18857333",
          },
          {
            id: 4,
            bezeichnung: "Betriebsrat",
            notfallnr: "0176-11119277",
          },
          {
            id: 5,
            bezeichnung: "Werkstattrat",
            notfallnr: "0151-18857333",
          }
        ],
        "mitarbeiter":[
      {
        id: 1,
        zuordnungsId: 1,
        name: "Antje Kahl",
        nummer: "+49(461)50306686",
        mail: "kahl@muerwiker-gruppe.de"
      }, {
        id: 2,
        zuordnungsId: 1,
        name: "Annette Sesemann",
        nummer: "+49(461)50306640",
        mail: "sesemann@muerwiker-gruppe.de"
      }, {
        id: 3,
        zuordnungsId: 2,
        name: "Kirsten Bork",
        nummer: "+49(461)50306672",
        mail: "bork@muerwiker-gruppe.de"
      }, {
        id: 4,
        zuordnungsId: 2,
        name: "Tina Eggert",
        nummer: "+49(461)50306674",
        mail: "eggert@muerwiker-gruppe.de"
      }, {
        id: 5,
        zuordnungsId: 3,
        name: "Annika Faltin",
        nummer: "+49(461)50306237",
        mail: "faltin@muerwiker-gruppe.de"
      }, {
        id: 6,
        zuordnungsId: 3,
        name: "Marc Schramm",
        nummer: "+49(461)50306331",
        mail: "schramm@muerwiker-gruppe.de"
      }, {
            id: 7,
            zuordnungsId: 4,
            name: "Gunter Südel",
            nummer: "0176-11119277",
            mail: "betriebsrat-muerwiker@muerwiker-gruppe.de"
          }, {
            id: 8,
            zuordnungsId: 5,
            name: "Nicholas Endlein",
            nummer: "+49(461)50306259",
            mail: "werkstattrat@muerwiker-gruppe.de"
          }, {
            id: 9,
            zuordnungsId: 5,
            name: "Jana Wiedemeyer",
            nummer: "49(461)50306732",
            mail: "wiedemeyer@muerwiker-gruppe.de"
          }
        ]
      }
    }
  },
  mounted() {
    this.getData()
    this.getContacts()
  },
  methods:{
    getMitarbeiter(){
      var resArr = [];

      var zuordnungFiltered = this.zuordnung.filter(element => element.divisionID == this.selectedAbteilung)

      zuordnungFiltered.forEach((element) => {
        resArr.push(this.contacts.find((x) => x.id == element.contactID))
      })

      return resArr
    },
    async getData(){
      let response = await axios
          .get(
              "http://127.0.0.1:8000/api/admins")
          .catch(() => {
            console.log("error getting checklist");
          });
      console.log(response.data.admins);
      this.data = response.data.admins
    },
    async getContacts(){

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