<template>
  <div class="box">
    <div class="bar">

    </div>
  </div>
</template>

<script>
  export default {
    name: "jindutiao",
    mounted() {

    },
  }
</script>

<style lang="less" scoped>

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    background: #000;

    .bar {
      width: 200px;
      height: 5px;
      background: linear-gradient(90deg, red, blue, green, yellow, purple, pink, orange);
      background-size: 300% 100%;
      border-radius: 10px;
      animation: bar 5s linear infinite;

    }

    @keyframes bar {
      0% {
        background-position: 300%;
      }
      100% {
        background-position: 0%;
      }
    }
  }

</style>
