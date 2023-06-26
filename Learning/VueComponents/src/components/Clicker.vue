<script>
    import { useMySecretStore } from '../stores/myStore.js';

    export default {
        data() {
            return {
                counter: this.store.getCount,
            }
        },
        setup() {
            const store = useMySecretStore();
            return { store } 
        },
        methods: {
            inc() {
                this.store.increment();
            }
        },
    }

</script>
<template>
    <span> Wartość w strorze to: {{ store.count }}</span>
    <button @click="this.inc()">Zwiększ wartość</button>
    <button @click="store.decrement()">Zmniejsz wartość</button>
</template>
<style scoped></style>