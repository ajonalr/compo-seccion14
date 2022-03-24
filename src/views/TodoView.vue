<template>
  <h1>Lista de Tareas de Thanos</h1>
  <h4>Tareas: {{ pendig.length }}</h4>
  
  <ul>

  </ul>

</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    return {
      pendig: computed(() => store.getters['pendigTodos']),
    };
  },
};
</script>

