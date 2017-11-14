<template>
  <div id="app" style="height: 100%;" v-cloak>
    <view-box ref="AppViewBox">
      <!--region 遮罩层-->
      <div class="weui-mask transparent" v-show="showMask"></div>
      <!--endregion-->
      <!--region 主体内容-->
      <div class="page-wrap">
        <!--endregion-->
        <transition :name="transitionName" @after-enter="afterEnter">
          <router-view keep-alive class="router-view"></router-view>
        </transition>
      </div>
      <!--endregion-->
    </view-box>
  </div>
</template>

<script>
  import { ViewBox, Loading } from 'vux'
  import { mapState } from 'vuex'
  export default {
    components: {
      ViewBox, Loading
    },
    created () {
      // 移动端调试 console
      // more info https://github.com/liriliri/eruda
      if (this.$utils.Common.getParam('debug')) {
        const script = document.createElement('script')
        script.src = 'https://cdn.bootcss.com/eruda/1.2.3/eruda.js'
        document.body.appendChild(script)
        script.onload = function () { window.eruda.init({tool: ['console', 'network', 'sources']}) }
      }
    },
    data () {
      return {
        transition: 'go'
      }
    },
    computed: {
      ...mapState({
        direction: ({global}) => global.direction,
        isLoading: ({global}) => global.isLoading,
        showMask: ({global}) => global.showMask
      }),
      transitionName () {
        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      }
    },
    methods: {
      afterEnter () {
        // 过场动画完成后
        // 去除全屏遮罩
        this.$store.commit('SHOW_MASK', false)
      }
    }
  }
</script>
<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';
  @import "assets/styles/global/iconfont";
  @import "assets/styles/global/common";
  @import "assets/styles/global/custom";
  @import "assets/styles/global/close";
</style>
