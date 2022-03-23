<template>
  <h1>Buscar Pokemon: {{ pokemonId }}</h1>

  <form @submit.prevent="onSubmit">
    <input
      type="number"
      placeholder="Numero de pokemon"
      autofocus
      v-model="pokemonId"
      ref="txtSearch"
    />
  </form>

  <br />
  <span>Precione enter para buscar</span>
</template>

<script>
import { ref, onActivated } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    const pokemonId = ref(1);
    const txtSearch = ref();

    onActivated(() => {
      txtSearch.value.select();
    });

    return {
      pokemonId,
      txtSearch,
      onSubmit: () => {
        router.push({ name: "pokemon-id", params: { id: pokemonId.value } });
      },
    };
  },
};
</script>

