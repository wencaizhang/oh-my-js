<template>
  <div class="imgWrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
.imgWrapper
  padding 1rem
  margin 40px 0
  background-color #fff
  border-radius 0.1875rem
  display flex
  justify-content center
  align-items center
  box-shadow 2px 2px 30px #C7CCD7
</style>
