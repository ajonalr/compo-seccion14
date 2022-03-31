<template>
  <h1>Aprendiendo Slot</h1>

  <button @click="openModal">Abrir Modal</button>

  <Modal v-if="isOpen" @on:close="closeModal" title="Hola Ariel Ramirez">
    <!-- <h1>Hola Mundo</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    <button>button>Salir</button -->

    <template v-slot:header>
      <h1>Hola Mundo</h1>
    </template>
    <template v-slot:footer>
      <button @click="closeModal">Salir</button>
    </template>
    <template v-slot:main>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    </template>

    <template v-slot:exposed="{newTitle}">
      <h2>{{ newTitle }}</h2>
    </template>
  </Modal>
</template>

<script>
import { ref, defineAsyncComponent } from "vue";
export default {
  components: {
    Modal: defineAsyncComponent(() => import("@/components/Modal.vue")),
  },
  setup() {
    const isOpen = ref(false);

    return {
      isOpen,
      openModal: () => (isOpen.value = true),
      closeModal: () => (isOpen.value = false),
    };
  },
};
</script>

