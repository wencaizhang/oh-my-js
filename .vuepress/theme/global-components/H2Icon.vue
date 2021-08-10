<template>
  <div style="display:inline-block">
    <img :src="src" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
import i1 from '../asserts/icon/h2-icon1.png'
import i2 from '../asserts/icon/h2-icon2.png'
import i3 from '../asserts/icon/h2-icon3.png'
import i4 from '../asserts/icon/h2-icon4.png'

export default {
  data () {
    return {
      src: ''
    }
  },
  mounted () {
    const rand = this.randomNum(1, 4)
    switch (rand) {
    case 1:
      this.src = i1
      break
    case 2:
      this.src = i2
      break
    case 3:
      this.src = i3
      break
    case 4:
      this.src = i4
      break
    }
  },
  methods: {
    randomNum (minNum, maxNum) {
      switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10)
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      default:
        return 0
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
