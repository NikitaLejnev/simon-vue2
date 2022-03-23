<template>
  <div
    class="tile"
    :data-tile="color"
    :id="color"
    :class="{ activated: isActivated }"
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
