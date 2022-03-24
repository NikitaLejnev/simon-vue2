<template>
  <main class="game">
    <header>
      <h1>{{ this.headerText }}</h1>
    </header>

    <tile-container
      :tiles="tiles"
      :isUnclickable="areTilesUnclickable"
      @tile-click="handleTileClick"
    ></tile-container>

    <footer class="info-section">
      <button
        class="start-button"
        :class="{ hidden: isGameOn }"
        @click="startGame()"
      >
        Start
      </button>
      <difficulty-selector
        :class="{ hidden: isGameOn }"
        @select-difficulty="handleSelectDifficulty"
      ></difficulty-selector>
      <span class="info" :class="{ hidden: isInfoShown }">{{
        this.infoText
      }}</span>
    </footer>
  </main>
</template>

<script>
import DifficultySelector from "./components/DifficultySelector.vue";
import TileContainer from "./components/TileContainer.vue";
export default {
  name: "App",
  components: {
    "tile-container": TileContainer,
    "difficulty-selector": DifficultySelector,
  },
  data() {
    return {
      tiles: [
        {
          id: "red",
          color: "red",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"
          ),
        },
        {
          id: "green",
          color: "green",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"
          ),
        },
        {
          id: "blue",
          color: "blue",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"
          ),
        },
        {
          id: "yellow",
          color: "yellow",
          active: false,
          sound: new Audio(
            "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"
          ),
        },
      ],
      gameStarted: false,
      sequence: [],
      playerTurn: false,
      playerSequence: [],
      roundWon: false,
      level: 0,
      difficulty: "easy",
      newTileDelay: 1500,
    };
  },
  computed: {
    isGameOn: {
      get: function () {
        return this.gameStarted;
      },
    },
    isInfoShown: {
      get: function () {
        return !this.gameStarted;
      },
    },
    areTilesUnclickable: {
      get: function () {
        return !this.playerTurn;
      },
    },
    headerText: {
      get: function () {
        return this.level > 0 ? `Level ${this.level}` : "Simon Game";
      },
    },
    infoText: {
      get: function () {
        if (this.roundWon) {
          return "Correct! Onto the next level.";
        } else {
          if (this.playerTurn) {
            return `Pick ${this.remainingTaps} tile${
              this.remainingTaps > 1 ? "s" : ""
            }`;
          }
          return "Observe ...";
        }
      },
    },
    remainingTaps: function () {
      return this.sequence.length - this.playerSequence.length;
    },
  },
  methods: {
    startGame: function () {
      this.gameStarted = true;
      this.nextRound();
    },
    nextRound: function () {
      this.level += 1;

      this.playerTurn = false;
      const newStep = this.nextStep();
      this.sequence.push(newStep);
      this.playRound(this.sequence);
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
      const userInputDelay = 500;
      this.sequence.forEach((tile, index) => {
        setTimeout(() => {
          this.activateTile(tile);
        }, (index + 1) * this.newTileDelay);
      });
      setTimeout(() => {
        this.playerTurn = true;
      }, this.level * this.newTileDelay + userInputDelay);
    },
    handleTileClick: function (id) {
      if (this.playerTurn) {
        const clickedTile = this.findTileById(id);
        clickedTile.sound.play();
        this.playerSequence.push(clickedTile);
        const index = this.playerSequence.length - 1;

        if (this.sequence[index] !== this.playerSequence[index]) {
          this.resetGame("Wrong tile. Game over.");
          return;
        }
        if (this.playerSequence.length === this.sequence.length) {
          this.roundWon = true;
          this.playerSequence = [];
          setTimeout(() => {
            this.roundWon = false;
            this.nextRound();
          }, 1000);
          return;
        }
      }
    },
    handleSelectDifficulty: function (id) {
      switch (id) {
        case "easy":
          this.newTileDelay = 1500;
          break;
        case "medium":
          this.newTileDelay = 1000;
          break;
        case "hard":
          this.newTileDelay = 400;
          break;
      }
    },
    findTileById: function (id) {
      return this.tiles.find((tile) => tile.id === id);
    },
    resetGame: function (message) {
      alert(message);
      this.gameStarted = false;
      this.playerTurn = false;
      this.sequence = [];
      this.playerSequence = [];
      this.level = 0;
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
