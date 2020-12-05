<template>
  <div class="button-flow">
    <span>button</span>
  </div>
</template>

<script>
  export default {
    name: "button-flow"
  }
</script>

<style lang="less" scoped>

  .button-flow {
    position: relative;
    width: 200px;
    height: 50px;
    background: linear-gradient(90deg, dodgerblue, darkorange, deeppink, mediumpurple);
    background-size: 400%;
    border-radius: 50px;
    z-index: 1;

    line-height: 50px;
    color: #fff;
    text-transform: uppercase;
  }

  .button-flow::before {
    content: "";
    position: absolute;
    left: -5px;
    right: -5px;
    top: -5px;
    bottom: -5px;
    background: linear-gradient(90deg, dodgerblue, darkorange, deeppink, mediumpurple);
    border-radius: 50px;
    background-size: 400%;
    filter: blur(20px);
    z-index: -1;
  }

  .button-flow:hover::before {
    animation: flow 10s infinite;
  }

  .button-flow:hover {
    animation: flow 10s infinite;
  }

  @keyframes flow {
    100% {
      background-position: -400% 0;
    }
  }


</style>
