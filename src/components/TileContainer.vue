<template>
  <div id="tile-container" :class="{ unclickable: isUnclickable }">
    <color-tile
      v-for="tile in tiles"
      v-bind="tile"
      :key="tile.color"
      @tile-click="$emit('tile-click', $event)"
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

<style>
#tile-container {
  display: grid;
  grid-template-rows: 180px 180px;
  grid-template-columns: 180px 180px;
  grid-gap: 25px;
  position: relative;
  margin-top: 30px;
  margin-bottom: 40px;
}

.unclickable {
  pointer-events: none;
}
</style>
