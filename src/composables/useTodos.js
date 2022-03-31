import { ref, computed } from 'vue'
import { useStore } from "vuex";


const useTodos = () => {
    const store = useStore();
    const currentTab = ref("all");
    const isOpen = ref(false);
    const text = ref('')

    console.log(text.value);

    return {
        currentTab,
        text,
        pendig: computed(() => store.getters["pendigTodos"]),
        all: computed(() => store.getters["allTodo"]),
        completed: computed(() => store.getters["completedTodo"]),
        getTodoByTab: computed(() =>
            store.getters["getTodoByTab"](currentTab.value)
        ),
        // methods
        createdTodo: () => store.commit("createdTodo", text.value),
        togelTodo: (id) => store.commit("toggelTodo", id),
        isOpen,
        openModal: () => (isOpen.value = true),
        closeModal: () => (isOpen.value = false),
    };
}
export default useTodos