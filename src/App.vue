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
        :class="{ hidden: isStartButtonHidden }"
        @click="startGame()"
      >
        Start
      </button>
      <span class="info" :class="{ hidden: isInfoShown }">{{
        this.infoText
      }}</span>
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
      nextSequence: [],
      playerTurn: false,
      playerSequence: [],
      roundWon: false,
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
      this.nextSequence.push(newStep);
      this.playRound(this.nextSequence);

      this.sequence = [...this.nextSequence];
      setTimeout(() => {
        this.startPlayerTurn();
      }, this.level * 600 + 1000);
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
    startPlayerTurn: function () {
      this.playerTurn = true;
    },
    handleTileClick: function (id) {
      const clickedTile = this.findTileById(id);
      this.playerSequence.push(clickedTile);
      if (this.playerSequence.length === this.sequence.length) {
        this.roundWon = true;
        this.playerSequence = [];
        setTimeout(() => {
          this.roundWon = false;
          this.nextRound();
        }, 1000);
        return;
      }
    },
    findTileById: function (id) {
      return this.tiles.find((tile) => tile.id === id);
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
