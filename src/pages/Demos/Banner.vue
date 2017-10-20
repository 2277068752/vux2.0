<template>
  <div slot="content">
    <div class="slide-wrapper">
      <div class="slide-content">
        <slide ref="slide" :loop="loop" :autoPlay="autoPlay" :showDot="showDot" :speed="speed">
          <div v-for="item in items">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </slide>
      </div>
    </div>
    <group title="控制参数">
      <x-switch title="循环播放" v-model="loop" @on-change=""></x-switch>
      <x-switch title="自动播放" v-model="autoPlay" @on-change=""></x-switch>
      <x-switch title="显示光标" v-model="showDot" @on-change=""></x-switch>
      <cell title="滚动速度" v-model="speed"></cell>
    </group>
  </div>
</template>

<script>
  import Slide from '../../components/BetterScroll/iSlide.vue'
  import { Group, Cell, XSwitch } from 'vux'

  export default {
    components: {
      Slide, Group, Cell, XSwitch
    },
    data () {
      return {
        items: [
          {
            linkUrl: '',
            picUrl: require('../../assets/images/banner/0.jpg'),
            id: 1
          },
          {
            linkUrl: '',
            picUrl: require('../../assets/images/banner/1.jpg'),
            id: 2
          },
          {
            linkUrl: '',
            picUrl: require('../../assets/images/banner/2.jpg'),
            id: 3
          },
          {
            linkUrl: '',
            picUrl: require('../../assets/images/banner/3.jpg'),
            id: 4
          }
        ],
        loop: true,
        autoPlay: true,
        showDot: true,
        speed: 400
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .slide-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 40%;
    overflow: hidden;
    .slide-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>
