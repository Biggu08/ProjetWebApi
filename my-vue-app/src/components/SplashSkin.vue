<template>
    <div>
        <span>Id Personnage recherchée : </span><input v-model="champId" type="number"><br>
        <span>Id Skin du perso recherchée : </span><input v-model="skinId" type="number"><br>
        <button @click="getSplashSkin(champId,skinId)">Rechercher</button>
        <img v-bind:src="League">
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios';


export default defineComponent({
  name: 'League',
  setup(){
     
  },
  data() {
    return {
        champId : '',
        skinId : '',
        League : ''
    }
  },
  computed: 
  {
    
  },
   methods: {
    getSplashSkin(IdChamp,IdSkin) 
    {
    
      axios.get('https://cdn.communitydragon.org/latest/champion/'+ IdChamp +'/splash-art/skin/' + IdSkin).then((response) => {

          this.League = response.config.url;
          console.log(response);
        });
    


    }
    
  }
  
 
})
</script>


 