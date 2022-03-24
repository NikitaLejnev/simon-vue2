<template>
  <header>
    <h1 class="heading">
      <slot>{{ headerText }}</slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style>
header {
  text-align: center;
  font-size: 18px;
}

.heading {
  font-size: 3em;
}
</style>
