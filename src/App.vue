<template>
  <main class="game">
    <header>
      <h1>Simon Game</h1>
    </header>

    <div class="tile-container js-container unclickable">
      <template v-for="tile in tiles">
        <color-tile :color="tile.color" :key="tile.color"></color-tile>
      </template>
    </div>

    <footer class="info-section">
      <button
        class="start-button"
        :class="{ hidden: isStartButtonHidden }"
        @click="startGame()"
      >
        Start
      </button>
      <span class="info" :class="{ hidden: isInfoShown }">Observe ...</span>
    </footer>

    <div class="hidden">
      <audio
        src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
        data-sound="red"
      ></audio>
      <audio
        src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
        data-sound="green"
      ></audio>
      <audio
        src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
        data-sound="blue"
      ></audio>
      <audio
        src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
        data-sound="yellow"
      ></audio>
    </div>
  </main>
</template>

<script>
import ColorTile from "./components/ColorTile.vue";
export default {
  name: "App",
  components: { "color-tile": ColorTile },
  data() {
    return {
      tiles: [
        { color: "red" },
        { color: "green" },
        { color: "blue" },
        { color: "yellow" },
      ],
      gameStarted: false,
      sequence: [],
      nextSequence: [],
      playerSequence: [],
      level: 0,
    };
  },
  computed: {
    isStartButtonHidden: {
      get: function () {
        return this.gameStarted;
      },
    },
    isInfoShown: {
      get: function () {
        return !this.gameStarted;
      },
    },
  },
  methods: {
    startGame: function () {
      this.gameStarted = true;
    },
    nextRound: function () {
      this.level += 1;
      const newStep = this.nextStep();
      this.nextSequence.push(newStep);
    },
    nextStep: function () {
      const randomIndex = Math.floor(Math.random() * this.tiles.length);
      return this.tiles[randomIndex];
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
