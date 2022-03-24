<template>
  <div id="difficulty-selector">
    <button
      v-for="difficultyLevel in difficultyLevels"
      :key="difficultyLevel.id"
      @click="$emit('select-difficulty', difficultyLevel.id)"
    >
      {{ difficultyLevel.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "DifficultySelector",
  data() {
    return {
      difficultyLevels: [
        {
          name: "Easy",
          id: "easy",
        },
        {
          name: "Medium",
          id: "medium",
        },
        {
          name: "Hard",
          id: "hard",
        },
      ],
    };
  },
};
</script>

<style>
#difficulty-selector > button {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  margin: 0.5rem 0.5rem;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  border-radius: 4px;
  cursor: pointer;
}
</style>
