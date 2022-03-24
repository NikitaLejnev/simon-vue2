<template>
  <span class="info" :class="{ hidden: !gameOn }">
    <slot>{{ infoText }}</slot>
  </span>
</template>

<script>
export default {
  name: "InfoDisplay",
  props: ["gameOn"],
};
</script>

<style>
.info {
  font-size: 22px;
}
</style>
