<template>
  <div class="dialog-page">
    <group>
      <cell title="Toast" is-link @click.native="showToast()"></cell>
      <cell title="Alert" is-link @click.native="showAlert()"></cell>
      <cell title="Dialog" is-link @click.native="showDialog=true"></cell>
      <cell title="ScrollDialog" is-link @click.native="showScrollDialog=true"></cell>
    </group>
    <x-dialog v-model="showDialog">
      <p style="font-size: 14px;">dialog 弹窗</p>
      <div><img src="../../assets/images/logo.png" style="width: 60px;"/></div>
      <span class="vux-close" @click="showDialog=false"></span>
    </x-dialog>
    <i-scroll-dialog v-model="showScrollDialog">
      <div class="dialog-text">
        <p v-for="i in 100">{{i}}</p>
      </div>
    </i-scroll-dialog>
  </div>
</template>
<script>
  import { XDialog, Group, Cell } from 'vux'
  import iScrollDialog from '../../components/iScrollDialog.vue'

  export default {
    components: {Group, Cell, XDialog, iScrollDialog},
    data () {
      return {
        showDialog: false,
        showScrollDialog: false
      }
    },
    mounted () {},
    methods: {
      showToast () {
        // 显示文字
        this.$vux.toast.show({text: '请输入正确的姓名'})
      },
      showAlert () {
        let _this = this
        this.$vux.alert.show({
          title: '提示',
          content: '恭喜你，通过了！',
          onHide () {
            _this.$vux.toast.show({text: '关闭了Alert'})
          }
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .dialog-page {
    background-color: #fff;
    .dialog-text {
      font-size: 30px;
    }
  }
</style>
