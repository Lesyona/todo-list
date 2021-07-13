<template>
    <div class="statistics">
        <h2>Statistics</h2>
        <div
            v-for="(item, index) in statistics"
            :key="index"
            class="statistics-item"
            v-html="item"
        >
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "TodoListStatistics",
    computed: {
        ...mapGetters({
            statistics: 'getStatistics',
        })
    },
}
</script>

<style lang="scss" scoped>
.statistics {
    width: 25%;
    padding-left: 30px;

    h2 {
        margin-top: 10px;
    }

    &-item {
        padding: 16px;
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
        0 1px 1px 0 rgba(0, 0, 0, 0.14),
        0 1px 3px 0 rgba(0, 0, 0, 0.12);
        margin-bottom: 10px;
        word-break: break-word;
    }
}
</style>