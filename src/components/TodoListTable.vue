<template>
    <div class="todolist todolist_table">
        <div class="todolist-table__header">
            <div class="todolist-table__header__cell">#</div>
            <div class="todolist-table__header__cell">Task</div>
            <div class="todolist-table__header__cell">Status</div>
            <div class="todolist-table__header__cell"></div>
        </div>
        <div class="todolist-table__body">
            <div
                v-for="(item, index) in todoListItems"
                :key="index"
                class="todolist-table__row"
            >
                <div class="todolist-table__cell"> {{ index + 1 }} </div>
                <div class="todolist-table__cell"> {{ item.title }} </div>
                <div class="todolist-table__cell">
                    <select
                        name="task-status"
                        v-model="selected[`item${index}`]"
                        @change="changeStatus(item, selected[`item${index}`])"
                    >
                        <option
                            v-for="status in statuses"
                            :key="status"
                            :value="status"
                        >
                            {{ status }}
                        </option>
                    </select>
                </div>
                <div class="todolist-table__cell">
                   <button
                       class="delete-button"
                       @click="deleteItemAction(item)"
                   ></button>
                </div>
            </div>
        </div>
<!--        {{ selected }}-->
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "TodoListTable",
    data: () => ({
        statuses: ['New', 'InProgress', 'Done'],
        selected: {}
    }),
    methods: {
        ...mapActions([
            'deleteItemAction',
            'changeItemStatusAction',
        ]),
        setModel() {
            this.todoListItems.forEach((item, index) => {
                this.$set(this.selected, `item${index}`, '')
            })
        },
        changeStatus(item, taskStatus){
            const data = {
                item: item,
                status: taskStatus
            }
            this.changeItemStatusAction(data);
        }
    },
    computed: {
        ...mapGetters({
            todoListItems: 'getTodoListItems',
        })
    },
    created () {
        this.setModel()
    },
}
</script>

<style lang="scss" scoped>
.todolist-table {
    &__header {
        &__cell {
            font-weight: bold;
            min-height: 45px;
            padding: 15px;
            text-align: left;
            text-overflow: ellipsis;
        }
    }

    &__header,
    &__row {
        display: grid;
        grid-template-columns: 10% 60% 20% 10%;
    }

    &__cell,
    &__header-cell {
        padding: 15px;
    }

    &__row {
        border-top: 1px solid rgba(0,0,0,.12);
    }

    &__cell {
        min-height: 45px;
    }
}
</style>