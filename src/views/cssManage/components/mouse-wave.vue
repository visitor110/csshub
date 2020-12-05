<template>
  <div class="mouse-wave" ref="wave">
    <span class="inner"></span>
    <button @click="mountedMouse">start</button>
  </div>
</template>

<script>
  export default {
    name: "mouse-wave",
    methods: {

      mountedMouse() {
        let element = this.$refs.wave
        element.onmouseenter = (event) => {
          let inner = element.querySelector(".inner")
          inner.classList.add("animation")
          inner.style.width = element.offsetWidth + 'px'
          inner.style.height = element.offsetHeight + 'px'
          inner.style.top = -(element.offsetHeight / 2 - event.offsetY) + 'px'
          inner.style.left = -(element.offsetWidth / 2 - event.offsetX) + 'px'
          setTimeout(() => {
            inner.classList.remove("animation")
          }, 1000)

        }
      }

    }
  }
</script>

<style lang="less" scoped>

  .mouse-wave {
    position: relative;
    width: 200px;
    height: 150px;
    background: linear-gradient(90deg, darkorange);
    border-radius: 20px;
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    box-shadow: 0 0 3px rgba(0,0,0,1);
  }

  .inner {
    display: block;
    border-radius: 100%;
    position: absolute;
    background: rgba(255, 255, 255, 1);
    transform: scale(0);
  }

  .animation {
    animation: wave .8s ease-in;
  }

  @keyframes wave {
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }

</style>
