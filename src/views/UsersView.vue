<template>
  <h2 v-if="isLoading">Espera porfavor ...</h2>

  <h2 v-else>Usuarios</h2>

  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{ first_name, last_name, email, id } in users" :key="id">
        <h4>{{ first_name }} {{ last_name }}</h4>
        <h6>{{ email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{ currentPage }}</span>
</template>

<script>
import useUsers from "@/composables/useUsers.js";
export default {
  setup() {
    const { prevPage, nextPage, currentPage, users, errorMessage } = useUsers();

    return {
      prevPage,
      nextPage,
      currentPage,
      users,
      errorMessage,
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>