<template>
  <div>
    <div class="grid">
      <div v-for="(pokemon, index) in pokemons" :index="index" :key="pokemon.name"
        class="col-12 md:col-6 lg:col-3 flex justify-content-center flex-wrap mt-6">
        <Card style="width:18em">
          <template #header>
            <img alt="user header" :src="pokemon.image" class="pl-5 pr-5" width="200" height="200" />
          </template>
          <template #title> <span style="text-transform: capitalize;">{{ pokemon.name }}</span></template>
          <template #subtitle> #{{ pokemon.id }} </template>
          <template #footer>
            <Button icon="pi pi-eye" label="Details"></Button>
          </template>
        </Card>
      </div>
    </div>
    <Paginator class="mt-6 mb-6" v-model:first="offset" :rows="limit" :totalRecords="total"></Paginator>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Home",
  data() {
    return {
      pokemons: [],
      limit: 20,
      offset: 0,
      total: 0,
      pokeNumber: 0,
    }
  },
  created() {
    this.getPokemons();
  },
  watch: {
    offset(newValue, oldValue) {
      this.offset = newValue;
      scroll(0,0)
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
          this.pokemons.map((pokemon) => {
            this.pokeNumber = this.pokeNumber + 1;
            pokemon.id = this.pokeNumber;
            pokemon.image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
          })
          console.log(this.pokemons)
        })
        .catch((err) => {
          console.log(err);
        });

      return null;
    },
  }
}
</script>
