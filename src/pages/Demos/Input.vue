<template>
  <div class="input-page">
    <group title="中间对齐" label-width="4rem" label-margin-right="1rem" label-align="right">
      <x-input title="姓名" v-model="name" placeholder="请输入姓名" :min="2" :max="6"></x-input>
      <x-input title="手机号码" v-model="phone" placeholder="请输入手机号码" :max="11" type="number"></x-input>
      <x-input title="身份证号" v-model="cardNum" placeholder="请输入身份证号" :max="18" type="number"></x-input>
      <x-address title="常用住址" v-model="address" :list="addressData" value-text-align="left" raw-value
                 placeholder="请选择常用地址"></x-address>
    </group>
    <group title="两边对齐" label-width="4rem" label-margin-right="1rem">
      <x-input title="姓名" v-model="name" placeholder="请输入姓名" :min="2" :max="6" text-align="right"></x-input>
      <x-input title="手机号码" v-model="phone" placeholder="请输入手机号码" :max="11" type="number" text-align="right"></x-input>
      <x-input title="身份证号" v-model="cardNum" placeholder="请输入身份证号" :max="18" type="number"
               text-align="right"></x-input>
      <x-address title="常用住址" v-model="address" :list="addressData" value-text-align="right" raw-value
                 placeholder="请选择常用地址"></x-address>
    </group>
    <group title="字段自动隐藏">
      <i-hide-input type="name" v-model="name" title="姓名" placeholder="请输入姓名"></i-hide-input>
      <i-hide-input type="phone" v-model="phone" title="手机号码" placeholder="请输入手机号码"></i-hide-input>
      <i-hide-input type="idCard" v-model="cardNum" title="身份证号" placeholder="请输入身份证号"></i-hide-input>
    </group>
  </div>
</template>
<script>
  import { Group, XInput, ChinaAddressData, XAddress } from 'vux'
  import iHideInput from '../../components/inputs/iHideInput.vue'

  export default {
    components: {Group, XInput, ChinaAddressData, XAddress, iHideInput},
    data () {
      return {
        name: '',
        phone: '',
        cardNum: '',
        address: [],
        addressData: ChinaAddressData
      }
    },
    mounted () {},
    methods: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .MyContain {
    background-color: #fff;
  }
</style>
