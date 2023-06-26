<!-- Single-File Component w stylu Composition API -->

<script setup>
    import { ref } from 'vue';
    const count = ref(0);

    // function increment(){
    //     count.value++;
    // }
    const increment = () => {
        count.value++;
    } 
</script>

<template>
    <button type="button" @click="increment"> Kliknięto mnie {{ count }} razy.</button>
</template>

<style scoped>
    button{
        padding: 5px;
        border-radius: 3px;
        background-color: black;
        color: white;
    }
</style>