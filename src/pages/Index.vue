<template>
  <div class="index-page">
    <div class="logo">
      <x-img :src="logo" :offset="10" :webp-src="logo" :default-src="logo" error-class="logo-error"
             success-class="logo-success"></x-img>
      <p>vux 2.0</p>
    </div>
    <group title="接口请求">
      <cell title="POST请求接口" is-link @click.native="postApi()"></cell>
      <cell title="GET请求接口" is-link @click.native="postApi()"></cell>
    </group>
    <group title="控件">
      <cell title="常用输入组件" is-link @click.native="input()"></cell>
      <cell title="弹窗" is-link @click.native="dialog()"></cell>
      <cell title="上拉加载 & 下拉刷新" is-link @click.native="pullDownAndPullUp()"></cell>
      <cell title="banner轮播" is-link @click.native="banner()"></cell>
      <cell title="引导页" is-link @click.native="guide()"></cell>
    </group>
  </div>
</template>

<script>
  import { XImg, Group, Cell } from 'vux'

  export default {
    components: {XImg, Group, Cell},
    data () {
      return {
        logo: require('../assets/images/logo.png')
      }
    },
    mounted () {
    },
    methods: {
      // post
      postApi () {
        this.$store.dispatch('testSendCode', {phone: '17714331167'}).then((res) => {
          this.$vux.toast.show({text: '请求接口成功！'})
        })
      },
      // input
      input () {
        this.$router.push({path: '/input'})
      },
      // dialog 弹窗
      dialog () {
        this.$router.push({path: '/dialog'})
      },
      // 上拉加载&下拉刷新
      pullDownAndPullUp () {
        this.$router.push({path: '/pullDownAndpullUp'})
      },
      // banner 轮播
      banner () {
        this.$router.push({path: '/banner'})
      },
      // 引导页
      guide () {
        this.$router.push({path: '/guide'})
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .index-page {
    background-color: #fff;
    .logo {
      text-align: center;
      padding: 20px 0;
      .logo-error, .logo-success {
        width: 120px;
      }
      p {
        font-size: 28px;
      }
    }
  }
</style>
