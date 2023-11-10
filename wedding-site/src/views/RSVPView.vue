<script setup lang="ts">
</script>

<template>
  <main>
    <h1>RSVP</h1>
    <form>
      <label for="name">First Name</label>
      <input type="text" name="" id="">
      <label for="email">Email</label>
      <input type="email" name="email" id="">
      <label for="yes">Going?</label>
      <input type="checkbox" name="yes" id="">
      <input type="submit" value="">

      <input type="hidden" name="time">
    </form>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  font-size: 4rem;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0;
}

form {
  background-color: rgb(154, 154, 154);
  padding: 40px;
  border-radius: 10px;
}

@media screen and (max-width: 1024px) {
  h1 {
    font-size: 2rem;
  }

  main {
    padding: 1rem;
  }
}
</style>
