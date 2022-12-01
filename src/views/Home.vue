<template>
  <link rel="stylesheet" type="text/css" href="./src/css/Default.css">

  <div class="topBar">
    <div class="col--1-of-3"><img src="../assets/muerwiker_logo.png" alt="Logo Mürwiker" class="logoMain"></div>
    <div class="col--1-of-3 centered header">Callcenter</div>
    <div class="col--1-of-3 right">
      <router-link to="/administration">
        <img src="../assets/account-cog.svg" alt="Administration" style="width: 2rem; color:white"/>
      </router-link>
    </div>
  </div>
  <div class="mainSearch"><img src="../assets/magnify.svg" >  <input class="mainSearch" v-model="search" placeholder="Suche">
    </div>
  <div style=" display: flex;justify-content: center">

    <div class="mainBox mainBoxHover">
      <span class="tooltip" style="float:right; position: relative; left: 70%">
          ?
        <span class="tooltiptext">
          Mitarbeiter für Arbeitsplädse
        </span>
      </span>

      <router-link to="/arbeiten">

        <img src="@/assets/briefcase.svg" class="mainImg"/>

        <p class="centered">Arbeiten</p>
      </router-link>
    </div>
    <div class="mainBox mainBoxHover">
      <span class="tooltip" style="float:right; position: relative; left: 70%">
          ?
        <span class="tooltiptext">
          Mitarbeiter für Wohnen und Häuser
        </span>
      </span>

      <router-link to="/wohnen">
        <img src="@/assets/home.svg" class="mainImg"/>
        <p class="centered">Wohnen</p>
      </router-link>
    </div>

    <div class="mainBox mainBoxHover">
            <span class="tooltip" style="float:right; position: relative; left: 70%">
          ?
        <span class="tooltiptext">
          Mitarbeiter der Verwaltung
        </span>
      </span>
      <router-link to="/stab">
        <img src="@/assets/family-tree.svg" class="mainImg"/>
        <p class="centered">Stab</p>
      </router-link>
    </div>

    <div class="mainBox mainBoxHover">
            <span class="tooltip" style="float:right; position: relative; left: 70%">
          ?
        <span class="tooltiptext">
          Mitarbeiter der Tagesförderstätten
        </span>
      </span>
      <router-link to="/tafo">
        <img src="@/assets/hand-heart-outline.svg" class="mainImg"/>
        <p class="centered">TaFö</p>
      </router-link>
    </div>

    <div class="mainBox mainBoxHover">
            <span class="tooltip" style="float:right; position: relative; left: 70%">
          ?
        <span class="tooltiptext">
          Mitarbeiter für den Fahrdienst
        </span>
      </span>
      <router-link to="/fahrdienst">
        <img src="@/assets/car-estate.svg" class="mainImg"/>
        <p class="centered">Fahrdienst</p>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
@import 'minireset.css';

</style>