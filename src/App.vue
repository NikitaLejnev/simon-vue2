<template>
  <main class="game">
    <header>
      <h1>Simon Game</h1>
    </header>

    <tile-container :tiles="tiles"></tile-container>

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
  </main>
</template>

<script>
import TileContainer from "./components/TileContainer.vue";
export default {
  name: "App",
  components: { "tile-container": TileContainer },
  data() {
    return {
      tiles: [
        {
          color: "red",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
          ),
        },
        {
          color: "green",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
          ),
        },
        {
          color: "blue",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
          ),
        },
        {
          color: "yellow",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
          ),
        },
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
      this.nextRound();
    },
    nextRound: function () {
      this.level += 1;
      const newStep = this.nextStep();
      this.nextSequence.push(newStep);
      this.playRound(this.nextSequence);
    },
    nextStep: function () {
      const randomIndex = Math.floor(Math.random() * this.tiles.length);
      return this.tiles[randomIndex];
    },
    activateTile: function (tile) {
      tile.active = true;
      tile.sound.play();
      setTimeout(() => {
        tile.active = false;
      }, 300);
    },
    playRound: function () {
      this.nextSequence.forEach((tile, index) => {
        setTimeout(() => {
          this.activateTile(tile);
        }, (index + 1) * 600);
      });
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
