<template>
  <div id="app">
    <main class="position-box">
      <pull-down-and-pull-up
        class="wrapper"
        ref="scroll"
        :scrollbar="scrollbarObj"
        :pullDownRefresh="pullDownRefreshObj"
        :pullUpLoad="pullUpLoadObj"
        :startY="parseInt(startY)"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp">
        <ul ref="list" class="list-content">
          <li class="list-item" v-for="item in items">{{item}}</li>
        </ul>
      </pull-down-and-pull-up>
    </main>
  </div>
</template>

<script>
  import pullDownAndPullUp from '../../components/BetterScroll/iPulldownAndPullUp.vue'

  let count = 1
  export default {
    name: 'app',
    components: {pullDownAndPullUp},
    data () {
      return {
        scrollbarObj: {
          fade: true
        },
        pullDownRefreshObj: {
          threshold: 90,
          stop: 40
        },
        pullUpLoadObj: {
          threshold: 0,
          txt: {
            more: '加载更多',
            noMore: '没有更多数据了'
          }
        },
        startY: 0,  // 纵轴方向初始化位置
        scrollToX: 0,
        scrollToY: 0,
        scrollToTime: 700,
        items: []
      }
    },
    mounted () {
      this.onPullingDown()
    },
    methods: {
      // 滚动到页面顶部
      scrollTo () {
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime)
      },
      // 模拟数据请求
      getData () {
        return new Promise(resolve => {
          setTimeout(() => {
            const arr = []
            for (let i = 0; i < 20; i++) {
              arr.push(count++)
            }
            resolve(arr)
          }, 1000)
        })
      },
      onPullingDown () {
        // 模拟下拉刷新
        console.log('下拉刷新')
        count = 0
        this.getData().then(res => {
          this.items = res
          this.$refs.scroll.forceUpdate(true)
        })
      },
      onPullingUp () {
        // 模拟上拉 加载更多数据
        console.log('上拉加载')
        this.getData().then(res => {
          this.items = this.items.concat(res)
          if (count < 50) {
            this.$refs.scroll.forceUpdate(true)
          } else {
            this.$refs.scroll.forceUpdate(false)
          }
        })
      }
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  body, html {
    height: 100%;
    overflow: hidden;
  }

  #app {
    font-family: '微软雅黑', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 9;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background-color: #009a61;
  }

  .position-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .wrapper {
    height: 100%
  }

  .list-content {
    list-style: none;
    background: #fff;
  }

  .list-item {
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    padding-left: 20px;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }

  .go-top {
    position: fixed;
    right: 20px;
    bottom: 20px;
    background-color: #009a61;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    padding: 10px 15px;
  }
</style>
