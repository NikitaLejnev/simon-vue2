<template>
  <main id="app">
    <page-header>Simon Game</page-header>
    <game-field></game-field>
  </main>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
import GameField from "./components/GameField.vue";
export default {
  name: "App",
  components: {
    "page-header": PageHeader,
    "game-field": GameField,
  },
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Rubik", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  color: #2c3e50;
}
</style>
