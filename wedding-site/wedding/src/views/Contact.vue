<script setup lang="ts">
  import axios from 'axios';
  import { ref } from 'vue';

  const comments = ref<any[]>([]);
  const name = ref("");
  const email = ref("");
  const message = ref("");

  const ws = new WebSocket("ws://localhost:8080/ws");

  ws.onmessage = (event) => {
    comments.value = JSON.parse(event.data);
  };

  ws.onopen = () => {
    ws.send("fetch");
  };

  ws.onerror = (error) => {
    console.error(`WebSocket Error: ${error}`);
  };

  ws.onclose = (event) => {
    if (event.wasClean) {
      console.log(`Closed cleanly, code=${event.code}, reason=${event.reason}`);
    } else {
      console.error(`Connection died`);
    }
  };

  const submitForm = async (e: Event) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:8080/api/contact', {
      name: name.value,
      email: email.value,
      message: message.value
    });
    console.log(response.data);
    // Reset form fields
    name.value = "";
    email.value = "";
    message.value = "";
  };
</script>


<template>
    <div class="contact">
      <h1>Contact us</h1>
      <p>Send us a message</p> 
    </div>
    <div class="form">
      <h2>Send us a message</h2>
      <form @submit="submitForm">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" />
        <label for="email">Email</label>
        <input type="text" name="email" id="email">
        <label for="message">Message</label>
        <input type="text" name="message" id="message">
        <button type="submit" @click="submitForm">Submit!</button>
      </form>
    </div>
    <div class="comments">
      <h2>Comments</h2>
      <div v-for="comment in comments" :key="comment.id">
        <p>{{ comment.name }}</p>
        <p>{{ comment.email }}</p>
        <p>{{ comment.message }}</p>
    </div>
    </div>
</template>

<style scoped>
  .contact {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 200px 0;
  }

  .contact p {
    margin-bottom: 20px;
  }

  .form {
    text-align: center;
    padding: 50px 80px;
  }

  .form p {
    margin-bottom: 20px;
  }

  .form label {
    display: block;
    margin-bottom: 10px;
  }

  .form input {
    display: block;
    margin-bottom: 20px;
    padding: 10px;
    width: 100%;
  }

  .form button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .form button:hover {
    background-color: #555;
  }
</style>
  

  