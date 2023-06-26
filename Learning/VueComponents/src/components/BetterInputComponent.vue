<script>
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';
    export default {
        components: {
            InputText,
            Button
        },
        data(){
            return {
                login: '',
                pass: '',
                re_pass: ''
            }
        },
        methods: {
            register(){

            }
        }
    }
</script>

<template>
    <div class="centered">
        <div class="p-input-icon-left">
        <i class="pi pi-at" />
        <InputText v-model="login" placeholder="Podaj adres e-mail" />
    </div>
    <div class="p-input-icon-left">
        <i class="pi pi-lock" />
        <InputText v-model="pass" placeholder="Podaj swoje hasło" />
    </div>
    <div class="p-input-icon-left">
        <i class="pi pi-lock" />
        <InputText v-model="re_pass" placeholder="Powtórz swoje hasło" />
    </div>
     
    
    </div>
</template>

<style scoped>
    .centered {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>