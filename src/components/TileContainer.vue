<template>
  <div class="tile-container js-container unclickable">
    <color-tile
      v-for="tile in tiles"
      v-bind="tile"
      :key="tile.color"
    ></color-tile>
  </div>
</template>

<script>
import ColorTile from "./ColorTile.vue";
export default {
  name: "TileContainer",
  components: { "color-tile": ColorTile },
  props: ["tiles"],
};
</script>

<style></style>
