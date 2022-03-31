<template>
  <h1>Lista de Tareas de Thanos</h1>
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

  <button @click="openModal">Crear Todo</button>

  <Modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
      <h1>Crear Nueva Tarea</h1>
    </template>

    <template v-slot:main>
      <form @submit.prevent="createdTodo">
        <input type="text" v-model="text" />
        <button type="submit">Crear</button>
      </form>
    </template>

    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>
  </Modal>
</template>

<script>
import useTodo from "@/composables/useTodos";
import { defineAsyncComponent } from "vue";

export default {
  components: {
    Modal: defineAsyncComponent(() => import("@/components/Modal.vue")),
  },
  setup() {
    const {
      currentTab,
      getTodoByTab,
      togelTodo,
      isOpen,
      openModal,
      closeModal,
      createdTodo,
      text,
    } = useTodo();

    return {
      currentTab,
      getTodoByTab,
      togelTodo,
      isOpen,
      openModal,
      closeModal,
      createdTodo,
      text,
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

