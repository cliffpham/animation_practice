<template>
  <div class="container">
    <transition name="slide-fade" mode="out-in">
      <div v-if="show"
        class="box1"
        v-on:click="test()"
        key="on"></div>
      <div v-else class="grid" v-on:click="test()" key="off">
          <div class="cell"></div>
          <div class="cell2"></div>
          <div class="cell2"></div>
          <div class="cell"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Practice',
  data() {
    return {
      show: true,
    };
  },
  methods: {
    test(){
      if (this.show) {
        this.show = false;
      }
      else {
        this.show = true
      }
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}

.box1 {
  height: 152px;
  width: 152px;
  background-color: lightgreen;
  justify-content: center;
}
.box2 {
  height: 100px;
  width: 100px;
  background-color: lightblue;
}
.grid {
  display: grid;
  grid-template-rows: 75px 75px;
  grid-template-columns: 75px 75px;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
}
.cell {
  background: grey;
  margin: 2px;
  font-size: 2em;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cell2 {
  background: grey;
  margin: 2px;
  font-size: 2em;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slide-fade-enter-active {
  transition: all .4s;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(.8, .01, .65, .53);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-500px);
  opacity: .5;
}
</style>
