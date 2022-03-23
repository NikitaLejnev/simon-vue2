<template>
  <div
    class="tile-container js-container"
    :class="{ unclickable: isUnclickable }"
  >
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
  props: ["tiles", "isUnclickable"],
};
</script>

<style></style>
