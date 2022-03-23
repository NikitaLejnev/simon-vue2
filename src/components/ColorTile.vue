<template>
  <div class="tile" :data-tile="color" :class="className"></div>
</template>

<script>
export default {
  name: "ColorTile",
  props: ["color"],
  computed: {
    className: {
      get: function () {
        return `tile-${this.color}`;
      },
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style></style>
