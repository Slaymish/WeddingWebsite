<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
</script>

<template>
  <header>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/contact">Contact us</RouterLink></li>  
      </ul>
  </header>
  <RouterView />
</template>

<style scoped>
  header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
  }

  header ul {
    display: flex;
    list-style: none;
    padding: 20px;
  }

  header ul li {
    margin-right: 20px;
  }

  header ul li a {
    color: #fff;
    text-decoration: none;
  }

  header ul li a:hover {
    text-decoration: underline;
  }

</style>
