<template>
    <div class="todolist todolist_kanban">
        <div class="todolist-column">
            <h2>New</h2>
            <div
                class="todolist-item-card"
                v-for="(item, index) in todoListItemsNew"
                :key="index"
            >
                {{ item.title }}
                <button
                    class="delete-button"
                    @click="deleteItemAction(item)"
                ></button>
            </div>
        </div>

        <div class="todolist-column">
            <h2>In progress</h2>
            <div
                class="todolist-item-card"
                v-for="(item, index) in todoListItemsInProgress"
                :key="index"
            >
                {{ item.title }}
                <button
                    class="delete-button"
                    @click="deleteItemAction(item)"
                ></button>
            </div>
        </div>

        <div class="todolist-column">
            <h2>Done</h2>
            <div
                class="todolist-item-card"
                v-for="(item, index) in todoListItemsDone"
                :key="index"
            >
                {{ item.title }}
                <button
                    class="delete-button"
                    @click="deleteItemAction(item)"
                ></button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "TodoListKanban",
    methods: {
        ...mapActions([
            'deleteItemAction',
            'changeItemStatusAction',
        ]),
    },
    computed: {
        ...mapGetters({
            todoListItems: 'getTodoListItems',
        }),
        todoListItemsNew() {
            return this.todoListItems.filter(item => item.status === 'New');
        },
        todoListItemsInProgress() {
            return this.todoListItems.filter(item => item.status === 'InProgress');
        },
        todoListItemsDone() {
            return this.todoListItems.filter(item => item.status === 'Done');
        }
    },
}
</script>

<style lang="scss" scoped>
.todolist_kanban {
    display: flex;
    justify-content: space-between;
}

.todolist-column {
    flex-basis: 31%;

    h2 {
        margin-top: 10px;
    }
}

.todolist-item-card {
    position: relative;
    padding: 16px 30px 16px 16px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
    0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 1px 3px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 10px;
    word-break: break-word;

    .delete-button {
        position: absolute;
        top: 5px;
        right: 5px;
    }
}
</style>