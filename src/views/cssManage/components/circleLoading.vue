<template>
  <div class="box">

    <div class="circle">

    </div>

  </div>

</template>

<script>
  export default {
    name: "circleLoading"
  }
</script>

<style lang="less" scoped>

  .box {
    height: 400px;
    width: 400px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle {
    width: 100px;
    height: 100px;
    border: 2px solid transparent;
    border-radius: 50%;
    border-top-color: red;

    position: relative;
    animation: rotate 3s linear infinite;

    &::before,
    &::after {
      content: '';
      position: absolute;
      border: 2px solid transparent;
      border-radius: 50%;
      width: 100px;
      height: 100px;
      animation: rotate 3s linear infinite;
    }

    &::before {
      border-top-color: pink;
      height: 90px;
      width: 90px;
      top: 5px;
      left: 5px;
    }

    &::after {
      border-top-color: yellow;
      height: 80px;
      width: 80px;
      top: 10px;
      left: 10px;

    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

</style>
