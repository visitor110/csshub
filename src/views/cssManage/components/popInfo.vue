<template>
  <div class="pop-box">
    <div class="pop-img">

    </div>
    <div class="pop-dialog">
      <span class="username">pt</span>
      <span class="title">demo</span>

    </div>
  </div>
</template>

<script>
  export default {
    name: "popInfo",
    data() {
      return {

      }
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

  @box-height: 150px;
  @box-width: 250px;


  .pop-box {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .pop-img, .pop-dialog {
    width: @box-width;
    height: @box-height;
  }

  .pop-img {
    background: url("~@/assets/css/背景.jpg") no-repeat;
    background-size: cover;
  }

  .pop-dialog {
    display: none;
    position: absolute;
    top: @box-height;
    background: #000;
    opacity: .5;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*align-items: flex-start;*/

    .username, .title{
      padding: 30px;
       color: #fff;
      font-size: 14px;
    }

  }

  .pop-img:after  {
    .pop-dialog{
      display: flex;
      background: red;
    }
  }


</style>
