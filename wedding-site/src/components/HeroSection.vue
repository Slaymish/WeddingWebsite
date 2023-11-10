<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HeroSection',
    props: {
        mainTitle: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        }
    }
})
</script>

<template>
    <div class="hero-section">
        <h1>{{ mainTitle }}</h1>
        <h2> {{ date }}</h2>
    </div>
</template>

<style scoped>
.hero-section {
    width: 100%;
    height: 90vh;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    background-color: aqua;
    justify-content: center;
}
</style>