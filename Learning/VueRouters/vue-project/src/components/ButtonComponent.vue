<!--Single-File Component w stylu Options API-->
<script>
    export default {
        data(){
            return {
                count: 0
            }
        },
        methods:{
            increment(){
                this.count++;
            }
        }
    }
</script>

<template>
    <button type="button" @click="increment">Kliknięto {{ count }} razy</button>
</template>

<style scoped>
    button{
        padding: 5px;
        border-radius: 3px;
    }
</style>