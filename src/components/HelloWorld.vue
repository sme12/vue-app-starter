<template>
    <div class="hello">
        <h1 class="hello__title">{{ msg }}</h1>
        <h2>Happy to see you{{ exclamationMarks }}</h2>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'HelloWorld',
    props: {
        msg: String,
        initialEnthusiasm: Number,
    },
    data() {
        return {
            enthusiasm: this.initialEnthusiasm,
        };
    },
    methods: {
        increment() {
            this.enthusiasm++;
        },
        decrement() {
            if (this.enthusiasm > 1) {
                this.enthusiasm--;
            }
        },
    },
    computed: {
        exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        },
    },
});
</script>

<style lang="scss" scoped>
.hello {
    padding: 40px;
}

.hello__title {
    text-align: center;
}
</style>
