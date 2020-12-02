<template>
  <div class="pop-box">
    <div class="pop-img">

    </div>
    <div class="pop-dialog">

    </div>
  </div>
</template>

<script>
  export default {
    name: "popInfo",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

  @box-height: 150px;
  @box-width: 250px;


  /*.pop-box {*/
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*position: relative;*/
  /*}*/

  .pop-img, .pop-dialog {
    width: @box-width;
    height: @box-height;
  }

  .pop-img {
    background: url("~@/assets/css/背景.jpg") no-repeat;
    background-size: cover;
  }

  .pop-dialog {
    position: absolute;
    top: @box-height;
    background: #000;
    opacity: .5;
  }

  .pop-img:hover {
    .pop-dialog{
      background: red;
    }
  }


</style>
