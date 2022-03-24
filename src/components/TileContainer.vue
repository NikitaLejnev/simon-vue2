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

#red {
  background-color: #f25022;
  box-shadow: 0 0 0 1px #f25022 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #c93a12, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
  transition: 0.15s;
}

#red:hover,
#red:focus {
  background-color: #ff451a;
  box-shadow: 0 0 0 1px #ff3000 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 10px 0 0 #e62b00, 0 10px 0 1px rgba(0, 0, 0, 0.4),
    0 10px 8px 1px rgba(0, 0, 0, 0.6);
}

#red:active,
#red.activated {
  box-shadow: 0 0 0 1px #ff5c36 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
  background-color: #ff5c36;
  transform: translateY(10px);
}

#green {
  background-color: #7fba00;
  box-shadow: 0 0 0 1px #7fba00 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #638f05, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
  transition: 0.15s;
}

#green:hover,
#green:focus {
  background-color: #8cc218;
  box-shadow: 0 0 0 1px #8cc218 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 10px 0 0 #74a802, 0 10px 0 1px rgba(0, 0, 0, 0.4),
    0 10px 8px 1px rgba(0, 0, 0, 0.6);
}

#green:active,
#green.activated {
  box-shadow: 0 0 0 1px #a0ea00 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
  background-color: #a0ea00;
  transform: translateY(10px);
}

#yellow {
  background-color: #ffbb00dc;
  box-shadow: 0 0 0 1px #ffbb00dc inset,
    0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #c28e07,
    0 8px 0 1px rgba(0, 0, 0, 0.4), 0 8px 8px 1px rgba(0, 0, 0, 0.5);
  transition: 0.15s;
}

#yellow:hover,
#yellow:focus {
  background-color: #e7ae0f;
  box-shadow: 0 0 0 1px #e7ae0f inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 10px 0 0 #c28e07, 0 10px 0 1px rgba(0, 0, 0, 0.4),
    0 10px 8px 1px rgba(0, 0, 0, 0.5);
}

#yellow:active,
#yellow.activated {
  box-shadow: 0 0 0 1px #ffcb3a inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
  background-color: #ffcb3a;
  transform: translateY(10px);
}

#blue {
  background-color: #00a4ef;
  box-shadow: 0 0 0 1px #00a4ef inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 8px 0 0 #0883bc, 0 8px 0 1px rgba(0, 0, 0, 0.4),
    0 8px 8px 1px rgba(0, 0, 0, 0.5);
  transition: 0.15s;
}

#blue:hover,
#blue:focus {
  background-color: #139ddd;
  box-shadow: 0 0 0 1px #139ddd inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 10px 0 0 #0c7cb0, 0 10px 0 1px rgba(0, 0, 0, 0.4),
    0 10px 8px 1px rgba(0, 0, 0, 0.6);
}

#blue:active,
#blue.activated {
  box-shadow: 0 0 0 1px #2bbcff inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset,
    0 0 0 1px rgba(0, 0, 0, 0.4);
  background-color: #2bbcff;
  transform: translateY(10px);
}
</style>
