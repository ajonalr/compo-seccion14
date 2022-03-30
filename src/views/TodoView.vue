<template>
  <h1>Lista de Tareas de Thanos</h1>
  <h4>Tareas Pedientes: {{ pendig.length }}</h4>

  <hr />

  <button @click="currentTab = 'all'" :class="{ active: currentTab === 'all' }">
    Todos
  </button>
  <button
    @click="currentTab = 'pending'"
    :class="{ active: currentTab === 'pending' }"
  >
    Pendientes
  </button>
  <button
    @click="currentTab = 'completed'"
    :class="{ active: currentTab === 'completed' }"
  >
    Completados
  </button>

  <div>
    <ul>
      <li
        v-for="todo in getTodoByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @dblclick="togelTodo(todo.id)"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const currentTab = ref("all");

    return {
      currentTab,
      pendig: computed(() => store.getters["pendigTodos"]),
      all: computed(() => store.getters["allTodo"]),
      completed: computed(() => store.getters["completedTodo"]),
      getTodoByTab: computed(() =>
        store.getters["getTodoByTab"](currentTab.value)
      ),
      // methods
      togelTodo: (id) => store.commit("toggelTodo", id),
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 30%;
  text-align: center;
}

li {
  cursor: pointer;
}

.active {
  background-color: #7571f9;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>

