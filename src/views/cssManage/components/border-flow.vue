<template>
  <div class="box">
    <a>
      <span>flow</span>
    </a>
  </div>

</template>

<script>
  export default {
    name: "border-flow"
  }
</script>

<style lang="less" scoped>

  .box {
    height: 800px;
    width: 800px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  a {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    width: 200px;

    box-reflect: below 1px linear-gradient(transparent, #0004);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  }

  a::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(45deg, #fb0094, #00f, #0f0, #ff0, #f00, #fb0094, #00f, #0f0, #ff0, #f00);
    background-size: 400%;
    translation: .5s;
    animation: animation 20s linear infinite;
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: linear-gradient(45deg, #fb0094, #00f, #0f0, #ff0, #f00, #fb0094, #00f, #0f0, #ff0, #f00);
    background-size: 400%;
    filter: blur(20px);
    translation: .5s;
    animation: animation 20s linear infinite;
  }

  a:hover::before,
  a:hover::after {
    opacity: 1;
  }

  @keyframes animation {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 300% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  a span {

    position: absolute;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-reflect: below 1px linear-gradient(transparent, #0004);
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
    background: #0c0c0c;
    z-index: 1;

  }

  a span:hover {
    color: rgba(255, 255, 255, 1);
  }

</style>
