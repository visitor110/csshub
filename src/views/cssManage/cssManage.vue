<template>
  <div>
    <pop-info/>

    <div class="triangle"/>

    <div class="circle circle1">
      <div class="circle circle2">
      </div>
    </div>

    <!-- hover 图标移动-->
    <button-fly class="my-components"/>

    <!-- hover 流光-->
    <button-flow class="my-components"/>

    <!-- 鼠标拨水效果-->
    <mouse-wave class="my-components"/>

    <!--边框流动-->
    <border-flow class="my-components"/>

  </div>
</template>

<script>
  import PopInfo from './components/popInfo'
  import ButtonFly from './components/button-fly'
  import ButtonFlow from './components/button-flow'
  import MouseWave from './components/mouse-wave'
  import BorderFlow from './components/border-flow'

  export default {
    name: "cssManage",
    data() {
      return {}
    },
    components: {
      PopInfo,
      ButtonFly,
      ButtonFlow,
      MouseWave,
      BorderFlow
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

  .my-components {
    margin-top: 15px;
  }

  .triangle {
    height: 0;
    width: 0;
    border: 100px solid orange;
    border-top: none;
    border-left-color: transparent;
    border-right-color: transparent;
  }

  .circle {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: green;

  }

  .circle1 {
    position: relative;
  }

  .circle2 {
    position: absolute;
    animation: circleScale 2s infinite .2s;
  }

  @keyframes circleScale {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }
</style>
