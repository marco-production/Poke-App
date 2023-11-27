<template>
  <div>
    <div class="grid without-margin">
      <div v-for="(pokemon, index) in pokemons" :index="index" :key="pokemon.name"
        class="col-12 md:col-6 lg:col-3 flex justify-content-center flex-wrap mt-6">
        <div class="fadein animation-duration-1000">
          <Card style="width:18em">
            <template #header>
              <img :alt="pokemon.name" :src="pokemon.image" class="pl-5 pr-5" width="200" height="200" />
            </template>
            <template #title><span style="text-transform: capitalize;">{{ pokemon.name }}</span></template>
            <template #subtitle><b>Pokemon number:</b> {{ pokemon.id }} </template>
            <template #footer>
              <router-link class="no-underline" :to="`/${pokemon.id}`"><Button label="More details"
                  severity="danger"></Button></router-link>
            </template>
          </Card>
        </div>
      </div>
    </div>

    <Paginator class="mt-6 mb-6" v-model:first="offset" :rows="limit" :totalRecords="total"></Paginator>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "home-view",
  data() {
    return {
      pokemons: [],
      limit: 20,
      offset: 0,
      total: 0,
    }
  },
  created() {
    this.getPokemons();
  },
  mounted() {
    document.title = 'Pokedex RD'
  },
  watch: {
    offset(newValue, oldValue) {
      console.log("New: " + newValue)
      console.log("Old: " + oldValue)
      this.offset = newValue;
      scroll(0, 0)
      this.getPokemons();
    },
  },
  methods: {
    /**
     * Get all pokemons paginated
     */
    async getPokemons() {
      await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`)
        .then((res) => {
          // Assign data
          const data = res.data;
          this.total = data.count;
          this.pokemons = data.results;

          // Add id to pokemon
          this.pokemons.map((pokemon, index) => {
            let offset = this.offset;
            pokemon.id = offset == 0 ? (index + 1) : offset + (index + 1)
            pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
          })
          console.log(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}&offset=${this.offset}`)
        })
        .catch((err) => {
          console.log(err);
        });

      return null;
    },
  }
}
</script>
<style>
.p-menubar.p-menubar-mobile .p-menubar-button {
    color: #ffffff;
}
.without-margin {
  margin-left: 0 !important; 
  margin-right: 0 !important;
}
</style>