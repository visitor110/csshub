<template>
  <div class="home-page">
    <div class="home-box">
      <!--<div class="header">-->

    </div>
    <div class="content">
      <el-row :gutter="10">
        <el-col :span="8">
          <base-frame/>
        </el-col>
        <el-col :span="8">
          middle
        </el-col>
        <el-col :span="8">
          right
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import BaseFrame from './components/baseFrame'

  export default {
    name: "home",
    data() {
      return {}
    },
    components: {
      BaseFrame
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

  .home-page {
    position: absolute;
    height: 100%;
    width: 100%;
    background: url(../../assets/home/bg.jpg) no-repeat;
    overflow: hidden;
    background-size: cover;


  }

</style>
