<template>
    <div>
      <!--Champ de texte pour l'id du perso recherché-->
      <span>Id Personnage recherchée : </span><input v-model="Sid" type="text"><br>
      <button @click="LaunchApi(Sid)">Rechercher</button><br>
      {{Name}}<br>
      {{Title}}<br>
      {{ShortBio}}<br>
      {{Difficulty}}<br>
      {{Roles}}<br>

    </div>
</template>

<script lang="ts">
import { defineComponent,computed} from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';


export default defineComponent({
  name: 'League',
  setup(){
    
  },
  data() {
    return {
      //Id du champion
      Sid : '',
      //Nom du champion
      Name : '',
      //Titre du champion 
      Title : '',
      //Courte Biographie
      ShortBio : '',
      //Difficulté à jouer
      Difficulty : '',
      //Rôle principal du perso 
      Roles : ''
      
    }
  },
  computed: 
  {
    
  },
   methods: {
    //Méthode qui permet d'appeler l'API REST de LoL qui donne les infos d'un champion  
    LaunchApi(IdChamp) 
    {
      const store = useStore();

      store.commit('increment');
      axios.get(' https://cdn.communitydragon.org/latest/champion/'+ IdChamp +'/data').then((response) => {
      store.commit('setData',response);
      
      this.Name = response.data.alias; 
      this.Title = response.data.title;
      this.ShortBio = response.data.shortBio;
      this.Difficulty = response.data.tacticalInfo.difficulty;
      this.Roles = response.data.roles[0]; 
      const rmData = computed(() => store.getters.getData);
      
      return {
        store,
        rmData
      }});
    },
  }
  
 
})
</script>