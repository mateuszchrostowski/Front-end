<script>
    import Button from 'primevue/button';
    import InputComponent from '../components/InputComponent.vue';
    import BetterInputComponent from '../components/BetterInputComponent.vue';

    const routes = {
        '/login':  InputComponent,
        '/register': BetterInputComponent,
    }

    export default {
        components: {
            Button,
            InputComponent,
            BetterInputComponent
        },

        data(){
            return {
                dynComponent : InputComponent,
                currentPath: window.location.hash
            }
        },
        methods: {
            switchComponent(x) {
                //if ( x == 1 ) {
                //     this.dynComponent = InputComponent;
                //     return;
                // }
                // this.dynComponent = import('../components/BetterInputComponent.vue');
                //this. dynComponent = x == 1?shallowRef(InputComponent):import('../components/BetterInputComponent.vue');
                this.dynComponent = x == 1?InputComponent:BetterInputComponent;

                // console.log(x);
                // window.location.hash = x;
                // this.dynComponent = BetterInputComponent;
                // return routes[this.currentPath.slice(1) || '/']
            }
        },
        mounted(){
            window.addEventListener('hashchange', () => {
                this.currentPath = window.location.hash;
            });
        }
    }

</script>
<template>
    <div>
        <div>
            <component :is="dynComponent" />
        </div>

        <base-layout>
            <template v-slot:[dynComponent]></template>
        </base-layout>

        <Button label="Komponent 1" @click="switchComponent(1)"/>
        <Button label="Komponent 2" @click="switchComponent(2)" />
    </div>
</template>
<style scoped></style>