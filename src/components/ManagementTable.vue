
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