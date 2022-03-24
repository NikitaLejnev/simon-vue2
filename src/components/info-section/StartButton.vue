<template>
  <button id="start-button" @click="$emit('game-start')">Start</button>
</template>

<script>
export default {
  name: "StartButton",
};
</script>

<style>
#start-button {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  cursor: pointer;
}

#start-button:hover {
  color: #333;
  border-color: #888;
  outline: 0;
}
</style>
