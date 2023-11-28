<template>
    <div class="ml-5">
        <h1 class="red">Pokemon Types</h1>
        <ul>
            <li v-for="t in pokeTypes" :key="t.name" class="capitalize">
                {{ t.name }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            pokeTypes: []
        }
    },
    created() {
        this.getTypes()
    },
    methods: {
        async getTypes() {
            await axios.get(`https://pokeapi.co/api/v2/type`)
                .then((res) => {
                    this.pokeTypes = res.data.results;
                    console.log(this.pokeTypes)
                })
                .catch((err) => {
                    console.log(err)
                    this.$router.push('/');
                })

            return null;
        }
    }
}
</script>
<style>
.capitalize {
    text-transform: capitalize;
}
.red{
    color: #D32F2F;
}
</style>