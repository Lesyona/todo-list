<template>
    <div id="app">
        <h1>TodoList</h1>

        <label class="input-label" for="todo-list-type">Choose TodoList type:</label>
        <div class="styled-select">
            <select name="todo-list-type" id="todo-list-type" v-model="todoListType">
                <option value="table">Table</option>
                <option value="kanban">Kanban</option>
            </select>
        </div>

        <TodoListItemAdd />

        <section v-if="todoListItems.length || statistics.length" class="todolist-wrapper">
            <TodoListTable v-if="todoListType === 'table'" />
            <TodoListKanban v-if="todoListType === 'kanban'" />
            <TodoListStatistics />
        </section>
    </div>
</template>

<script>
import TodoListTable from './components/TodoListTable.vue'
import TodoListKanban from './components/TodoListKanban.vue'
import TodoListStatistics from './components/TodoListStatistics.vue'
import TodoListItemAdd from './components/TodoListItemAdd'
import { mapGetters } from "vuex";

export default {
    name: 'App',
    data() {
        return {
            todoListType: 'table',
        }
    },
    components: {
        TodoListTable,
        TodoListKanban,
        TodoListStatistics,
        TodoListItemAdd
    },
    computed: {
        ...mapGetters({
            todoListItems: 'getTodoListItems',
            statistics: 'getStatistics',
        }),
    },
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

body {
    background: #fafafa;
    margin: 0;
    font-family: Verdana, Arial, sans-serif;
    padding: 20px;
}

.todolist-wrapper {
    display: flex;
}

.todolist {
    flex-grow: 1;
}

.input-label {
    display: block;
    margin-bottom: 10px;
}

.styled-select {
    margin-bottom: 20px;
    width: 200px;

    select {
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius: 5px;
        padding: 10px;
        outline: none;
    }
}

.delete-button {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABzUlEQVRYhe3Wy27TYBAF4A+2ZAkRECpuFeVdemFL6RMAZYHaF2FHEQ9QhRYJBDwILCo2sKDsoV2FEMzin8iRaxzbKeqiPZKl5J8zM8dje2Y4w2nHuYb8OdzDIm7Ef/iGr3iPN9g/LoFj9LCFIbIp1wh9XD+u5Cs4iOADbOM+FnAhrgWshm0Q3AMsz5r8iXRHmXRXN2v43MKOvBrrbZOvRIDfeNrCfyN8R1pUoicve5vkkyIy/MSVJo4v5WWfFbsRa6uuw5xUuoHyZ/4Q3ZLzbtiKuB2xhlJlp2JdUrxdYnsUtk8FEd04y4JTRL/CdgQfgrxaYptMNBZRdlbEWtjf1RHwOch3/mEvJpyWnNQnMuzVEXAY5E4F5xI+yrvfHi5X8DvBOywazpeQszoqS1A1V8Z5/tQJdOKP4MRfwsf+32dY1ieO4JrUNAbSYCmiaSOa17ARwQtJ8U5dhwq8jljPmzhdlQ+jjRmSb0aMH6o/01Isy8dxGxGb8nG82MIfaS6MF5JdabBMw7y87CPppZ4JS9I8H69kfTzAXanDdeL3Gl7hl7zsre+8iIt4pt5SOpRmf60FpOla3pNWtSVpV5hcy79Ia/lbfG8Y9wynGH8BHnKpr/YwVJ8AAAAASUVORK5CYII=) 50% 50% / cover no-repeat;
    border: 0;
    width: 25px;
    height: 25px;
    cursor: pointer;
    padding: 0;
}
</style>
