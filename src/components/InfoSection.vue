<template>
  <section id="info-section">
    <start-button
      :class="{ hidden: isGameOn }"
      @game-start="$emit('game-start', $event)"
    ></start-button>
    <difficulty-selector
      :class="{ hidden: isGameOn }"
      @select-difficulty="$emit('select-difficulty', $event)"
    ></difficulty-selector>
    <info-display :gameOn="isGameOn"
      ><slot>{{ infoText }}</slot></info-display
    >
  </section>
</template>

<script>
import DifficultySelector from "./info-section/DifficultySelector.vue";
import InfoDisplay from "./info-section/InfoDisplay.vue";
import StartButton from "./info-section/StartButton.vue";
export default {
  name: "InfoSection",
  components: {
    "difficulty-selector": DifficultySelector,
    "start-button": StartButton,
    "info-display": InfoDisplay,
  },
  props: ["gameStatus"],
  computed: {
    isGameOn: {
      get: function () {
        return this.gameStatus;
      },
    },
  },
};
</script>

<style>
.hidden {
  display: none !important;
}

#info-section {
  text-align: center;
}
</style>
