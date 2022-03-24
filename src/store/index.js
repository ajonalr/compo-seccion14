import { createStore } from 'vuex'

export default createStore({
    state: {
        todos: [
            { id: 1, text: 'Lista 1', completed: false },
            { id: 2, text: 'Lista 2', completed: false },
            { id: 3, text: 'Lista 3', completed: true },
            { id: 4, text: 'Lista 4', completed: true },
            { id: 5, text: 'Lista 5', completed: false },
            { id: 6, text: 'Lista 6', completed: true },
            { id: 7, text: 'Lista 7', completed: false },
            { id: 8, text: 'Lista 8', completed: false },
        ],
    },
    getters: {
        pendigTodos(state, getters, rootState) {

            return state.todos.filter(todo => !todo.completed == false);

        }
    },
    mutations: {},
    actions: {},
    modules: {}
})