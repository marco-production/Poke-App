<template>
    <div>
        <div class="grid justify-content-center mt-5 mb-5">
            <div class="col-12 md:col-5 lg:col-5">
                <Fieldset>
                    <template #legend>
                        <div class="flex align-items-center gap-2 px-2">
                            <span class="font-bold text-xl">
                                #{{ pokemon.id }}
                                <span class="capitalize">{{ pokemon.name }}</span>
                            </span>
                        </div>
                    </template>
                    <div class="grid">
                        <div class="col-12 md:col-5 lg:col-5">
                            <img :src="pokemon.image" :alt="pokemon.name" width="250" height="250">
                        </div>
                        <div class="col-12 md:col-7 lg:col-7">
                            <Badge severity="info" v-for="t in pokemon.types" :key="t.slot" :value="t.type.name"
                                class="capitalize mr-2"></Badge>
                            <Divider />
                            <Badge :value="`Weight: ${pokemon.weight}`" class="mr-2" severity="warning"></Badge>
                            <Badge :value="`Height: ${pokemon.height}`" class="mr-2" severity="warning"></Badge>
                            <br>
                            <p class="m-0 mt-3">{{ pokemon.description }}</p>
                        </div>
                    </div>
                </Fieldset>
            </div>
            <div class="col-12 md:col-5 lg:col-5">
                <Fieldset class="fieldsetStyle">
                    <template #legend>
                        <div class="flex align-items-center gap-2 px-2">
                            <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                            <span class="font-bold">Pokemon Data</span>
                        </div>
                    </template>
                    <span v-for="(stat, index) in pokemon.stats" :key="stat.base_stat">
                        <p class="uppercase m-0">{{ stat.stat.name }}</p>
                        <ProgressBar :class="`${statsColors[index]} ${index != 5 ? 'mb-2' : ''}`" :value="stat.base_stat">
                        </ProgressBar>
                    </span>
                </Fieldset>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import Badge from 'primevue/badge';
import ProgressBar from 'primevue/progressbar';
import Divider from 'primevue/divider';

export default {
    name: "pokemon-details",
    data() {
        return {
            pokemon: '',
            statsColors: [
                "greenBar",
                "redBar",
                "",
                "purpleBar",
                "orangeBar",
                "yellowBar"
            ]
        }
    },
    components: {
        Badge,
        ProgressBar,
        Divider
    },
    created() {
        this.getPokemon()
    },
    methods: {
        async getPokemon() {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`)
                .then(async (res) => {
                    this.pokemon = res.data
                    this.pokemon.name = this.pokemon.forms[0].name
                    this.pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemon.id}.svg`

                    await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.$route.params.id}`)
                        .then((res) => {
                            this.pokemon.description = res.data.flavor_text_entries[0].flavor_text
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
}
</script>
<style>
.capitalize {
    text-transform: capitalize;
}

.uppercase {
    text-transform: uppercase;
}

.greenBar.p-progressbar .p-progressbar-value {
    background: #1da750;
}

.redBar.p-progressbar .p-progressbar-value {
    background: #d9342b;
}

.yellowBar.p-progressbar .p-progressbar-value {
    background: #c79807;
}

.purpleBar.p-progressbar .p-progressbar-value {
    background: #5457cd;
}

.orangeBar.p-progressbar .p-progressbar-value {
    background: #d46213;
}</style>