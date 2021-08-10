<template>
  <div>
    <ul class="rightMenuWrapper">
      <li v-for="(item, index) in hrefArr"
          :key="index">
        <img v-show="item === activeClass"
             src="../asserts/icon/2.png" />
        <a :href="item"
           :id="item"
           :class="{active: item === activeClass}">{{item.slice(1)}}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      activeClass: '',
      hrefArr: [],
      offsetTop: [],
      scrollTop: 0
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (Math.abs(scrollTop + windowHeight - scrollHeight) < 1) {
        this.activeClass = this.hrefArr[this.hrefArr.length - 1]
        return
      }
      const _this = this
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const activeRoute = this.offsetTop.filter(function (item) {
        if (_this.scrollTop + 2 > item) {
          return true
        }
      })
      this.activeClass = this.hrefArr[activeRoute.length - 1]
    },
    initTitle () {
      this.hrefArr = []
      window.addEventListener('scroll', this.handleScroll)
      const li = document.getElementsByTagName('h2')
      for (let i = 0; i < li.length; i++) {
        const hrefValue = '#' + li[i].getAttribute('id')
        this.hrefArr.push(hrefValue)
        this.offsetTop[i] = li[i].offsetTop
      }
    }
  },
  mounted () {
    console.log('object');
    setTimeout(this.initTitle, 100)
    const _this = this
    window.onresize = function temp () {
      _this.initTitle()
    }
  }
}
</script>
<style lang="stylus" scoped>
@media (max-width: 920px){
  .rightMenuWrapper{
    display :none;
  }
}
.rightMenuWrapper
  position fixed
  padding-left 50px
  top 100px
  right -34px
  width 150px
  font-size 14px
  padding-right 30px
  li
    height 30px
    line-height 30px
    list-style none
    display flex
    position relative
    &::before
      content ''
      position absolute
      width 5px
      height 5px
      background #C4C9D2
      border-radius 50%
      top 50%
      transform translate(0, -50%)
      left -21px
    a
      text-decoration none !important
      width 160px
      height 30px
      line-height 30px
      color #596C8E
      margin-bottom 10px
      position relative
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      &:hover
        color #3683D6
      a.active
        color #3683D6
    img
      position absolute
      width 20px
      height 20px
      top 50%
      transform translate(0, -50%)
      left -30px
</style>
