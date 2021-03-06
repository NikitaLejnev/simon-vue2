<template>
  <div id="game-field">
    <tile-container
      :tiles="tiles"
      :isUnclickable="areTilesUnclickable"
      @tile-click="handleTileClick"
    ></tile-container>

    <info-section
      @game-start="this.startGame"
      @select-difficulty="newTileDelay = $event"
      :gameStatus="this.gameStarted"
      >{{ this.infoText }}</info-section
    >
  </div>
</template>

<script>
import InfoSection from "./InfoSection.vue";
import TileContainer from "./game-field/TileContainer.vue";
export default {
  name: "App",
  components: {
    "tile-container": TileContainer,
    "info-section": InfoSection,
  },
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
      playerSequence: [],
      playerTurn: false,
      roundWon: false,
      level: 0,
      newTileDelay: 1500,
    };
  },
  computed: {
    areTilesUnclickable: {
      get: function () {
        return !this.playerTurn;
      },
    },
    infoText: {
      get: function () {
        if (this.roundWon) {
          return "Correct! Onto the next level.";
        }
        if (this.playerTurn) {
          return `Pick ${this.remainingTaps} tile${
            this.remainingTaps > 1 ? "s" : ""
          }`;
        }
        return "Observe ...";
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
      const newTile = this.nextTile();
      this.sequence.push(newTile);
      this.playRound();
    },
    nextTile: function () {
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
      this.displaySequence();
      this.waitBeforePlayerTurn();
    },
    displaySequence: function () {
      this.sequence.forEach((tile, index) => {
        setTimeout(() => {
          this.activateTile(tile);
        }, (index + 1) * this.newTileDelay);
      });
    },
    waitBeforePlayerTurn: function () {
      const userInputDelay = 500;
      setTimeout(() => {
        this.playerTurn = true;
      }, this.level * this.newTileDelay + userInputDelay);
    },
    handleTileClick: function (color) {
      const clickedTile = this.findTileByColor(color);
      clickedTile.sound.play();
      this.playerSequence.push(clickedTile);
      this.determineTurnOutcome();
    },
    determineTurnOutcome: function () {
      const index = this.playerSequence.length - 1;
      if (this.sequence[index] !== this.playerSequence[index]) {
        return this.resetGame("Wrong tile. Game over.");
      }
      if (this.playerSequence.length === this.sequence.length) {
        return this.winRound();
      }
    },
    winRound: function () {
      this.roundWon = true;
      this.playerSequence = [];
      setTimeout(() => {
        this.roundWon = false;
        this.nextRound();
      }, this.newTileDelay);
    },
    findTileByColor: function (color) {
      return this.tiles.find((tile) => tile.color === color);
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
#game-field {
  margin-left: auto;
  margin-right: auto;
}
</style>
