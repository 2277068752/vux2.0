<template>
  <div class="input-page">
    <group title="中间对齐" label-width="4em" label-margin-right="1em" label-align="right">
      <x-input title="姓名" v-model="name" placeholder="请输入姓名" :min="2" :max="6"></x-input>
      <x-input title="手机号码" v-model="phone" placeholder="请输入手机号码" :max="11" type="number"></x-input>
      <x-input title="身份证号" v-model="cardNum" placeholder="请输入身份证号" :max="18" type="number"></x-input>
      <x-address title="常用住址" v-model="address" :list="addressData" value-text-align="left" raw-value
                 placeholder="请选择常用地址"></x-address>
    </group>
    <group title="两边对齐" label-width="4em" label-margin-right="1em">
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
    <group title="字段格式化">
      <!-- mask:其中 9 表示数字，A 表示大写字母，S 表示数字或者字母 -->
      <x-input title="储蓄卡" v-model="bankCardInput" placeholder="请输入正确的银行卡号" :max="23" keyboard="number" type="tel"
               mask="9999 9999 9999 9999 999"></x-input>
      <x-input title="手机号" v-model="phoneInput" placeholder="请输入手机号" :max="13" keyboard="number" type="tel"
               mask="999 9999 99999"></x-input>
    </group>
  </div>
</template>
<script>
  import { Group, XInput, ChinaAddressData, XAddress, Value2nameFilter as value2name } from 'vux'
  import iHideInput from '../../components/inputs/iHideInput.vue'

  export default {
    components: {Group, XInput, ChinaAddressData, XAddress, iHideInput},
    data () {
      return {
        name: '',
        phone: '',
        cardNum: '',
        bankCardInput: '',
        phoneInput: '',
        address: [],
        addressData: ChinaAddressData
      }
    },
    mounted () {},
    computed: {
      bankCard () {
        return this.bankCardInput.replace(/\s/g, '')
      },
      phoneNum () {
        return this.phoneInput.replace(/\s/g, '')
      }
    },
    methods: {
      getName (value) {
        return this.address && value2name(this.address, ChinaAddressData)
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .MyContain {
    background-color: #fff;
  }
</style>
