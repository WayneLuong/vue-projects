//import axios from 'axios'

import axios from "axios"

const state = {
    todos: []
}

//Getters computed properties to be accessed
const getters = {
    //state, getters, rootState, rootGetters
    allTodos: (state) => state.todos
}

//Actions
const actions = {
    //{ commit, state }, data
    async fetchTodos({ commit, state }, data) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log(response.data, 'commit: ', commit, 'state: ', state, 'data: ', data)

        //Calls the mutation setTodos
        commit('setTodos', response.data)
    },
    async addTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false })

        commit('newTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo', id)
    },
    async filterTodos({ commit }, e) {
        //get selected number
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        console.log(limit, e)

        //fetch todos again
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodos', response.data)
    },
    async updateTodo({ commit }, upTodo) {
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${upTodo.id}`,
            upTodo
        )
        console.log(response.data)

        commit('updateTodo', response.data)
    }
}

//Mutate State
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, newTodo) => state.todos.unshift(newTodo),
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo: (state, upTodo) => {
        const index = state.todos.findIndex(todo => todo.id == upTodo.id)
        if (index !== -1) {
            state.todos.splice(index, 1, upTodo)
        }
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}