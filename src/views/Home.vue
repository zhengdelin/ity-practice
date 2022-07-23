<template>
  <nav>
    <router-link :to="{ name: 'cyt' }">cyt</router-link> |
    <router-link :to="{ name: 'iris' }">iris</router-link> |
    <router-link :to="{ name: 'ting' }">ting</router-link>
  </nav>
</template>

<script>
export default {
  name: "AppHome",
};
</script>

<style scoped></style>
