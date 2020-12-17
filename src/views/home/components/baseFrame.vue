<template>
  <div class="base-frame">
    <div class="title">
      base-frame-title
    </div>
    <div class="content">
      base-frame-content
    </div>
  </div>
</template>

<script>
  export default {
    name: "baseFrame",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="less" scoped>

  .base-frame{
    border: 1px solid #f1f1f1;
    margin: .5vw
  }

  .base-frame::before{
    border-top: 3px solid red;
  }

</style>
