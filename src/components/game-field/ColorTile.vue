<template>
  <div
    class="tile"
    :data-tile="color"
    :id="id"
    :class="{ activated: isActivated }"
    @click="$emit('tile-click', id)"
  ></div>
</template>

<script>
export default {
  name: "ColorTile",
  props: ["color", "active", "id"],
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
