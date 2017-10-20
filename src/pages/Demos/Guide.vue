<template>
  <div class="guide-page">
    <slide ref="slide" :autoPlay="false" :loop="false">
      <div v-for="(item,index) in items">
        <div class="full-page-img-wrapper" :style="getStyle(index)">
          <div v-if="index === items.length -1" class="button-wrapper" @click="handleClick()">
            <span class="button">开始</span>
          </div>
        </div>
      </div>
    </slide>
  </div>
</template>
<script>
  import Slide from '../../components/BetterScroll/iSlide.vue'

  export default {
    components: {Slide},
    data () {
      return {
        items: [
          {
            id: 1,
            url: require('../../assets/images/guide/spring.jpeg')
          },
          {
            id: 2,
            url: require('../../assets/images/guide/summer.jpeg')
          },
          {
            id: 3,
            url: require('../../assets/images/guide/fall.jpeg')
          },
          {
            id: 4,
            url: require('../../assets/images/guide/winter.jpeg')
          }
        ]
      }
    },
    mounted () {},
    methods: {
      handleClick () {
        this.$router.push({path: '/index'})
      },
      getStyle (index) {
        return `background-image:url(${this.items[index].url})`
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .guide-page {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #efeff4;
    overflow: hidden;
    .slide {
      height: 100%;
      .slide-group {
        height: 100%;
        .slide-item {
          height: 100%;
          .full-page-img-wrapper {
            position: relative;
            height: 100%;
            background-size: cover;
            transform: translateZ(0);
            .button-wrapper {
              position: fixed;
              bottom: 85px;
              display: block;
              width: 100%;
              overflow: hidden;
              .button {
                display: inline-block;
                width: 130px;
                padding: 8px 0;
                border: 4px solid rgba(255, 255, 255, 0.7);
                border-radius: 4px;
                color: rgba(255, 255, 255, 0.7);
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
</style>
