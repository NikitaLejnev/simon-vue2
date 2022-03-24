<template>
  <div
    class="tile"
    :id="color"
    :class="{ activated: isActivated }"
    @click="$emit('tile-click', color)"
  ></div>
</template>

<script>
export default {
  name: "ColorTile",
  props: ["color", "active"],
  computed: {
    isActivated: {
      get: function () {
        return this.active;
      },
    },
  },
};
</script>

<style></style>
