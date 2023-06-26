<script>
import { useCssModule } from 'vue';
import ButtonComponent from '../components/ButtonComponent.vue';
import ButtonComponentComposition from '../components/ButtonComponentComposition.vue';

export default {
    components: {
        ButtonComponent,
        ButtonComponentComposition
    }
}
</script>

<template>
    <ButtonComponent />
    <ButtonComponentComposition />
</template>

<style scoped></style>