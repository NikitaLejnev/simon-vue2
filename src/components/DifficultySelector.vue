<template>
  <div id="difficulty-selector">
    <button
      v-for="difficultyLevel in difficultyLevels"
      :key="difficultyLevel.id"
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

<style></style>
