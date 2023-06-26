<script>
    export default {
        props: ['name', 'type', 'modelValue'],
        emits: ['update:modelValue']
    }
</script>

<template>
    <label :for="name">{{ name }}</label>
    <input :type="type" :id="name" :value="modelValue" @input="$emit('update:modelValue', e)">
</template>

<style>
</style>