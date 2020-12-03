<template>
  <div>
    <pop-info/>
    <div class="triangle"/>

    <div class="circle circle1">
      <div class="circle circle2">

      </div>
    </div>
  </div>
</template>

<script>
  import PopInfo from './components/popInfo'

  export default {
    name: "cssManage",
    data() {
      return {}
    },
    components: {
      PopInfo
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

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
    animation: circleScale 2s infinite .2s ;
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
