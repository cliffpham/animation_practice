<template>
  <b-container>
    <b-row align-h="start">
      <b-col cols="1" align-self="center" offset-lg="2">
        <div style="display: flex; flex-direction: column; align-items: center; padding: 0;">
          <button class="nav" v-on:click="component='Summary'">Short</button>
          <button class="nav" v-on:click="component='Story'">Story</button>
          <button class="nav">Skills</button>
          <button class="nav">Contact</button>
        </div>
      </b-col>
      <b-col cols="6">
        <transition
        :duration="{enter: 500, leave: 50}"
        name="custom-classes-transition"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <component v-bind:is="component"></component>
        </transition>
      </b-col>
    </b-row>
    <button  class="ret" v-on:click="switchPage">Go Back</button>
  </b-container>
</template>

<script>
import { bus } from '../main';
import Summary from './Summary.vue';
import Story from './Story.vue';

export default {
  name: 'About',
  components: {
    Summary,
    Story,
  },
  methods: {
    switchPage() {
      bus.$emit('goToPage', 'Base');
    }
  },
  data() {
    return {
      component: 'Summary',
    };
  },
};
</script>

<style scoped>
.ret {
padding: 0;
border: 0;
background-color: transparent;
color: #FFF;
}

.ret:focus {outline:none}

.nav {
padding:0; 
border:0;
background-color:transparent;
transform: rotate(-90deg);
color: #FFF;
margin: 15px;
}

.nav:focus {outline:none}
</style>
