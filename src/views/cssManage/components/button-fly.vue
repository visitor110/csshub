<template>
  <div class="button-fly">
    <button class="my-button">
      <img src="@/assets/css/fly.jpg" width="15px" height="15px">
      <span style="margin-left: 20px">点击</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: "button-fly"
  }
</script>

<style lang="less" scoped>

  .button-fly {

    .my-button {
      background: #3EA3E2;
      border: 1px solid #000;
      border-radius: 10px;
      color: #fff;
      font-size: 16px;
      width: 100px;
      display: flex;
      align-items: center;
      padding: 5px;

    }

    .my-button:hover {
      box-shadow: 0 0 3px 3px lightskyblue;
    }

    .my-button:hover img {
      animation: fly 2s infinite .4s;

    }

  }

  @keyframes fly {
    0% {
      transform: translate(0%);
    }

    50% {
      transform: translate(450%);
    }

    100% {
      transform: translate(0%);
    }

  }

</style>
