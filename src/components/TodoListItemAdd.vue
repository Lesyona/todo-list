<template>
    <div class="todolist-form">
        <div class="form-input-wrap">
            <label class="input-label" for="task-title">Enter task title</label>
            <input class="form-input" type="text" v-model="taskTitle" id="task-title" placeholder="Enter task title">
        </div>

        <button class="form-button" @click="addTodoItem">Add Todo Item</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "TodoListItemAdd",
    data: () => ({
        taskTitle: "",
    }),
    methods: {
        ...mapActions([
            'addItemAction'
        ]),
        addTodoItem() {
            this.addItemAction({
                title: this.taskTitle,
                status: 'New'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.todolist-form {
    min-width: 250px;
    margin-bottom: 20px;
}

.form-input-wrap {
    margin-bottom: 10px;
}

.form-input {
    width: 100%;
    background: #fff;
    border: 1px solid rgba(0,0,0,.12);
    border-radius: 5px;
    height: 45px;
    padding: 10px 15px;
    font-family: Verdana, Arial, sans-serif;
}

.form-button {
    border-radius: 5px;
    background: #6200ee;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    height: 36px;
    padding: 0 16px;
    font-family: Verdana, Arial, sans-serif;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
</style>