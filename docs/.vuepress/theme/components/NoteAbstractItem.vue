<template>
  
  <div v-if="!isPC"
    class="abstract-item"
    @click="$router.push(item.path)">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div class="title">
      <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
      <router-link :to="item.path">{{item.title}}</router-link>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <PageInfo
      :pageInfo="item"
      :currentTag="currentTag">
    </PageInfo>
  </div>

  <!-- 改版 -->
  <div v-else
    class="abstract-item"
    @click="$router.push(item.path)"
    >
    <div 
    :style="item.frontmatter.pic?{'background':'url('+ item.frontmatter.pic +') center/cover no-repeat'}:{'background':'url('+ $coverRandom +') center/cover no-repeat'}"
     class="cover-wrap" :class="num%2==0?'flyl':'flyr'">
    </div>
    <div class="abstract-content-wrap" :class="num%2==0?'flyl':'flyr'" :style="num%2==0?{'margin-left':'5%'}:{'margin-right':'5%'}">
    <i v-if="item.frontmatter.sticky" class="iconfont reco-sticky"></i>
    <div class="title">
      <i v-if="item.frontmatter.keys" class="iconfont reco-lock"></i>
      <router-link :to="item.path">{{item.title}}</router-link>
    </div>
    <div v-if="item.frontmatter.isAbstract" class="abstract" v-html="item.excerpt"></div>
    <PageInfo
      :pageInfo="item"
      :currentTag="currentTag">
    </PageInfo>
    </div>
  </div>

</template>

<script>
import PageInfo from './PageInfo'
export default {
  components: { PageInfo },
  props: ['item', 'num', 'currentPage', 'currentTag'],
  data () {
    return {
      isPC: true
    }
  },
  mounted () {
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      this.isPC = false
    } else {
      this.isPC = true
    }
  }
}
</script>

<style>
.cover-wrap{
    width: 40%;
    flex: 1;
    transition: 1s ease-out;
    border-radius: .5rem;
    overflow: hidden;
    height: 12.5rem;
    position: relative;
    text-align:center;

}
.abstract-content-wrap{
  width: 55%;
  height: 12rem;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    display: flex;
    transition: all .3s;
}
.cover{
    width: 100%;
    height: 100%;
    transition: transform .5s;
    transform: scale(1.1);
}
.flyl{
  float: left;
}
.flyr{
  float: right;
}
</style>
<style lang="stylus" scoped>
@require '../styles/mode.styl'
.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
