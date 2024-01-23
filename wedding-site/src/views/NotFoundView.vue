<template>
    <div class="wrapper">
        <h1>404</h1>
        <p>Page not found</p>
        <v-btn color="secondary" href="/">Back to Home</v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NotFoundView'
})
</script>

<style scoped>
h1 {
    font-size: 10rem;
    text-align: center;
    margin-bottom: 0;
}

p {
    font-size: 2rem;
    text-align: center;
    margin-top: 0;
}

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    max-width: 600px;
    margin-bottom: 2rem;
    background-color: var(--white-mute);
    border-radius: 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    padding: 3rem;
}
</style>