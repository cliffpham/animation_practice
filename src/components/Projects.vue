<template>
  <b-container>
    <b-row align-h="center">
        <div class="grid">
          <div v-for="project in obj" class="cell" v-on:click="showProject(project[0], project[1], project[2])">
            <div class="title">
              <h4>{{ project[0] }} </h4>
            </div>
            <b-img :src="project[2]" width="150px" height="150px" class="thumbnail"></b-img>
          </div>
        </div>
    </b-row>
    <br/>
    <b-button v-on:click="switchPage">Go Back</b-button>
    </b-col>
  </b-container>
</template>

<script>
import { bus } from '../main';

export default {
  name: 'Projects',
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      obj: [['Functional Harmony', 'Lorem ipsum blah blah blah', "https://i.imgur.com/cbLrRou.pngm]"], ['Kioku', 'blah jvsifn csnfisn cnsifn faknfs', 'https://picsum.photos/250/250/?image=58'],['Meishi', 'more blah blah fisif fafso flamf', "https://picsum.photos/300/150/?image=41"]],
    };
  },
  methods: {
    switchPage() {
      bus.$emit('goToPage', 'Base');
    },
    showProject(title, text, image) {
      this.$modal.show({
      template: `
        <div style="display: flex; flex-direction: column; align-items: center;">
            <h1>{{ title }} </h1>
        <b-img :src="image" fluid alt="project1"></b-img>
            <p> {{ text }} </p>
        </div>
      `,
      props: ['title', 'text', 'image']
    }, {
      title: title,
      text: text,
      image: image
    }, {
      height: '500px',
      width: '500px',
      delay: 200,
      pivotY: 0.2,
    }, {
      'before-close': (event) => { console.log('this will be called before the modal closes'); }
    })
    },
    hideProject() {
      this.$modal.hide('project');
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-rows: 150px 150px 150px;
  grid-template-columns: 150px 150px 150px;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
}

.cell {
  border: dotted 1px #000;
  position: relative;
}

.title {
  position: absolute;
  height: 100%;
  text-align: center;
  width: 100%;
}

.title:before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

h4 {
  display: inline-block;
  font-size: 20px;
  color: #FFF
}

.thumbnail {
  filter: opacity(30%);
  display: inline-block;
  max-width: 100%;
  height: auto;
}

</style>
