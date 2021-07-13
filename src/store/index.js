import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoListItems: [],
    statistics: [],
  },
  mutations: {
    addItemToTodoList(state, item) {
      state.todoListItems.push(item);
    },
    deleteItemFromTodoList(state, item) {
      const index = state.todoListItems.indexOf(item);
      state.todoListItems.splice(index, 1);
    },
    changeItemStatus(state, { item, status }){
      const todoItem = state.todoListItems.find(element => item === element);
      todoItem.status = status;
    },
    reportStatistics(state, { item, action }) {
      const statisticsText = `Task <strong>"${item.title}"</strong> ${action}`;
      state.statistics.push(statisticsText);
    }
  },
  actions: {
    addItemAction({ commit }, item) {
      commit('addItemToTodoList', item);
      commit('reportStatistics', {
        item: item,
        action: 'added'
      });
    },
    deleteItemAction({ commit }, item) {
      commit('deleteItemFromTodoList', item);
      commit('reportStatistics', {
        item: item,
        action: 'deleted'
      });
    },
    changeItemStatusAction({ commit }, { item, status }) {
      commit('changeItemStatus', { item, status });
      commit('reportStatistics', {
        item: item,
        action: 'changed status'
      });
    }
  },
  getters: {
    getTodoListItems: state => state.todoListItems,
    getStatistics: state => state.statistics,
  }
})
