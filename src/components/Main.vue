<template>
  <b-container>
    <b-row align-h="center">
      <b-col xl="3">
        <div class="box" v-on:click="switchPage('About')"> Myself </div>
      </b-col>
      <b-col xl="3">
        <div class="box" v-on:click="switchPage('Projects')"> Projects </div>
      </b-col>
      <div class="w-100"> </div>
      <b-col xl="3">
        <div class="box"> Music </div>
      </b-col>
      <b-col xl="3">
        <div class="box"> Writing </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { bus } from '../main';

export default {
  name: 'Main',
  methods: {
    switchPage(page) {
      bus.$emit('goToPage', page);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column wrap;
  height: 100%;
}

.box {
  width: 250px;
  height: 250px;
  color: #FFF;
  border: dotted 2px #FFF;
  margin-bottom: 25px;
}

</style>
