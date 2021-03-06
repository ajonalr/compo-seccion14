import { createStore } from 'vuex'
import { v4 as uuidV4 } from 'uuid'
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
            return state.todos.filter(todo => !todo.completed);
        },
        completedTodo(state, getters, rootState) {
            return state.todos.filter(todo => todo.completed)
        },
        allTodo(state, getters, rootState) {
            return state.todos
        },
        getTodoByTab: (__, getters) => (currenTab) => {

            switch (currenTab) {
                case 'all':
                    return getters.allTodo
                case 'pending':
                    return getters.pendigTodos
                case 'completed':
                    return getters.completedTodo
            }

        }
    },
    mutations: {

        toggelTodo(state, id) {
            const todoIxd = state.todos.findIndex(todo => todo.id === id);
            state.todos[todoIxd].completed = !state.todos[todoIxd].completed;
        },
        createdTodo(state, text = '') {
            if (text.length <= 0) {
                return;
            }
            state.todos.push({
                id: uuidV4(),
                completed: false,
                text
            })
        }

    },
    actions: {},
    modules: {}
})