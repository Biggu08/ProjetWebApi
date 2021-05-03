<template>
  <div>
    <!--Premiere division permettant d'afficher les differentes informations d'un champion via son id-->
    <div><league/></div> 
    <!--Deuxieme division permettant d'afficher les differentes Skins d'un champion via son id et l'id du skin-->
    <div><splash-skin/></div> 
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex';
import League from './components/League.vue'
import SplashSkin from './components/SplashSkin.vue'

export default defineComponent({
  name: 'App',
  components: {
    League,
    SplashSkin
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>