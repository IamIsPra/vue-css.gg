<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :width="size"
    :height="size"
    :fill="color"
    :transform="rotation"
  >
    <component :is="icon" />
  </svg>
</template>

<script>
import icons from "../icons";

export default {
  name: "GGIcons",
  components: {
    ...icons,
  },
  props: {
    name: {
      type: String,
      require: true,
    },
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: "#000",
    },
    rotate:{
      type: Number,
      default: 0,
    }
  },
  methods: {
    toProperCase(value){
     return value.toLowerCase().split('-').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
      }).join('');
      },
  },
  computed: {
    icon() {
      return this.toProperCase(this.name);
    },
    rotation() {
      return "rotate("+this.rotate+")";
    },
  },
};
</script>
