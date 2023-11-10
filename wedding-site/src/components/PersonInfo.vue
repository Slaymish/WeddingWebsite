<template>
    <div class="person-info">
      <img :src="pictureURL" :alt="name" />
      <h1> {{ name }} </h1>
      <p> {{blurb}} </p>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PersonInfo',
    props: {
        name: {
          type: String,
          required: true
        },
        blurb: {
          type: String,
          required: true
        },
        pictureURL: {
          type: String,
          required: true
        }
    },
    setup(){}
  });
</script>

<style scoped>
.person-info {
    text-align: center;
    border: 2px solid white;
    border-radius: 4px;
}
</style>