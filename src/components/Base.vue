<template>
  <b-container>
    <transition
    :duration="{enter: 1000, leave: 30}"
    appear
    name="custom-classes-transition"
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut">
    <component v-bind:is="component"></component>
    </transition>
  </b-container>
</template>

<script>
import Main from './Main.vue';
import About from './About.vue';
import Projects from './Projects.vue';

import { bus } from '../main';

export default {
  name: 'Base',
  components: {
    Main,
    About,
    Projects,
  },
  data() {
    return {
      component: 'Main',
    };
  },
  created() {
    bus.$on('goToPage', (data) => {
      this.component = data;
    });
  },
};

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
