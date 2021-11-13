<template>
<div style="position:relative; padding-bottom:75%; width:100%; height:0">
    <iframe :src="iurl" frameborder="no" scrolling="no" width="100%" height="600" style="position:absolute; height: 100%; width: 100%;"></iframe>
</div>
</template>

<script>
export default {
  props: {
    cid: '',
    aid: '',
    page: {
      type: String,
      default: "1"
    }
  },
  computed: {
    iurl() {
      const p = this.page?this.page:1;
      const str = "//player.bilibili.com/player.html?aid=" + this.aid + "&cid=" + this.cid +"&page=" + p +"&high_quality=1&danmaku=0";
      return str;
    }
 }
}
</script>

<style>

</style>